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

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free",
    description: "Unlock Features",
    benefits: [],
    limitations: [],
    prices: {
      monthly: 0,
    },
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_FREE_MONTHLY_PRICE_ID!,
    },
  },
  {
    title: "Basic",
    description: "Unlock Basic Features",
    benefits: [
      "Unlimited 1-1 meetings",
      "Stripe, Paypal integration",
      "Connect multiple calendars",
      "Stripe, Paypal integration",
    ],
    limitations: [
      "Route with Salesforce look-up",
      "Mobile app & browser extension",
    ],
    prices: {
      monthly: 14,
    },
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY_PRICE_ID!,
    },
  },
  {
    title: "Premium",
    description: "For Power Users",
    benefits: [
      "Unlimited 1-1 meetings",
      "Stripe, Paypal integration",
      "Connect multiple calendars",
      "Stripe, Paypal integration",
      "Route with Salesforce look-up",
      "Mobile app & browser extension",
    ],
    limitations: [],
    prices: {
      monthly: 30,
    },
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID!,
    },
  },
];
