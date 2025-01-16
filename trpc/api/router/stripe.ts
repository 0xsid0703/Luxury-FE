import { unstable_noStore as noStore } from "next/cache";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth";
import prisma, { Customer } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

import { pricingData } from "@/lib/magic-link/subscriptions";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export interface SubscriptionPlan {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
  };
  stripeIds: {
    monthly: string | null;
  };
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<
    Customer,
    "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"
  > & {
    stripeCurrentPeriodEnd?: number;
    isPaid: boolean;
    interval: "month" | null;
    isCanceled?: boolean;
  };
export const stripeRouter = createTRPCRouter({
  createSession: protectedProcedure
    .input(z.object({ planId: z.string() }))
    .mutation(async (opts) => {
      const userId = opts.ctx.userId! as string;
      const planId = opts.input.planId;
      const customer = await prisma.customer.findFirst({
        where: {
          authUserId: userId,
        },
        select: {
          id: true,
          plan: true,
          stripeCustomerId: true,
        },
      });


      const returnUrl = process.env.NEXTAUTH_URL + "/";

      if (customer && customer.plan !== "FREE") {
        /**
         * User is subscribed, create a billing portal session
         */
        const session = await stripe.billingPortal.sessions.create({
          customer: customer.stripeCustomerId!,
          return_url: returnUrl,
        });
        return { success: true as const, url: session.url };
      }

      /**
       * User is not subscribed, create a checkout session
       * Use existing email address if available
       */

      const user = await getCurrentUser();
      if (!user) {
        return null;
      }
      const email = user.email!;

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: email,
        client_reference_id: userId,
        subscription_data: { metadata: { userId } },
        cancel_url: returnUrl,
        success_url: returnUrl,
        line_items: [{ price: planId, quantity: 1 }],
      });

      if (!session.url) return { success: false as const };
      return { success: true as const, url: session.url };
    }),

  // plans: protectedProcedure.query(async () => {
  //   const proPrice = await stripe.prices.retrieve(PLANS.PRO.priceId);
  //   const stdPrice = await stripe.prices.retrieve(PLANS.STANDARD.priceId);
  //
  //   return [
  //     {
  //       ...PLANS.STANDARD,
  //       price: dinero({
  //         amount: stdPrice.unit_amount!,
  //         currency:
  //           currencies[stdPrice.currency as keyof typeof currencies] ??
  //           currencies.USD,
  //       }),
  //     },
  //     {
  //       ...PLANS.PRO,
  //       price: dinero({
  //         amount: proPrice.unit_amount!,
  //         currency:
  //           currencies[proPrice.currency as keyof typeof currencies] ??
  //           currencies.USD,
  //       }),
  //     },
  //   ];
  // }),
  userPlans: protectedProcedure
    // .output(Promise<UserSubscriptionPlan>)
    .query(async (opts) => {
      noStore();
      const userId = opts.ctx.userId! as string;
      const custom = await prisma.customer.findFirst({
        where: {
          authUserId: userId,
        },
        select: {
          stripeSubscriptionId: true,
          stripeCurrentPeriodEnd: true,
          stripeCustomerId: true,
          stripePriceId: true,
        },
      });

      if (!custom) {
        // throw new Error("Custom not found");
        console.log("Custom not found:", userId);
        return;
      }
      // Check if user is on a paid plan.
      const isPaid =
        custom.stripePriceId &&
        custom.stripeCurrentPeriodEnd &&
        custom.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now();
      // Find the pricing data corresponding to the custom's plan
      const customPlan =
        pricingData.find(
          (plan) => plan.stripeIds.monthly === custom.stripePriceId,
        )
      const plan = isPaid && customPlan ? customPlan : pricingData[0];

      const interval = customPlan?.stripeIds.monthly === custom.stripePriceId
        ? "month"
        : null
      let isCanceled = false;
      if (isPaid && custom.stripeSubscriptionId) {
        const stripePlan = await stripe.subscriptions.retrieve(
          custom.stripeSubscriptionId,
        );
        isCanceled = stripePlan.cancel_at_period_end;
      }

      return {
        ...plan,
        ...custom,
        stripeCurrentPeriodEnd: custom.stripeCurrentPeriodEnd?.getTime() ?? 0,
        isPaid,
        interval,
        isCanceled,
      };
    }),
});
