export interface SubscriptionPlan {
  title?: string;
  description?: string;
  benefits?: string[];
  limitations?: string[];
  prices?: {
    monthly: number;
  };
  stripeIds?: {
    monthly: string | null;
  };
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<
    Customer,
    "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"
  > & {
    stripeCurrentPeriodEnd: number;
    isPaid: boolean | "" | null;
    interval: string | null;
    isCanceled?: boolean;
  };
