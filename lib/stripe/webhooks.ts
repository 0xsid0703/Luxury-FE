import type Stripe from "stripe";

import prisma,{ SubscriptionPlan } from "@/lib/prisma";

import { stripe } from ".";
import { getSubscriptionPlan } from "./plans";

export async function handleEvent(event: Stripe.DiscriminatedEvent) {
  const session = event.data.object as Stripe.Checkout.Session;
  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id;
    const { userId } = subscription.metadata;
    if (!userId) {
      throw new Error("Missing user id");
    }
    const customer = await prisma.customer.findFirst({
      where: {
        authUserId: userId,
      },
    });
    console.log({customer});
    /**
     * User is already subscribed, update their info
     */
    if (customer) {
      return await prisma.customer.update({
        where: {
          id: customer.id,
        },
        data: {
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscription.id,
          stripePriceId: subscription.items.data[0]?.price.id,
        },
      });
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id;
    const { userId } = subscription.metadata;
    if (!userId) {
      throw new Error("Missing user id");
    }
    const customer = await prisma.customer.findFirst({
      where: {
        authUserId: userId,
      },
    });

    /**
     * User is already subscribed, update their info
     */
    if (customer) {
      const priceId = subscription.items.data[0]?.price.id;
      if (!priceId) {
        return;
      }

      const plan = getSubscriptionPlan(priceId) || SubscriptionPlan.FREE;
      console.log({ plan });
      console.log(SubscriptionPlan.FREE);
      return await prisma.customer.update({
        where: {
          id: customer.id,
        },
        data: {
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscription.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000,
          ),
          plan: plan,
        },
      });
    }
  }
  if (event.type === "customer.subscription.updated") {
    //add customer logic
    console.log("event.type: ", event.type);
  }
  console.log("✅ Stripe Webhook Processed");
}
