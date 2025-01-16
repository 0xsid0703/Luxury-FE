import { SubscriptionPlan } from "@/lib/prisma";

export const PLANS: Record<
  string,
  (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]
> = {
  [process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID!]: SubscriptionPlan.BASIC,
  [process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID!]:
    SubscriptionPlan.PREMIUM,
};

type PlanType = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan];

export function getSubscriptionPlan(priceId: string | undefined): PlanType {
  return priceId && PLANS[priceId] ? PLANS[priceId]! : SubscriptionPlan.FREE;
}
