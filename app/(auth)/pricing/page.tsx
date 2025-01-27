import Faq from "@/components/pricing/Faq";
import Pricing from "@/components/pricing/Pricing";
import { getCurrentUser } from "@/lib/auth";
import { trpc } from "@/trpc/server";
import React from "react";

const PricingPage = async () => {
  const user = await getCurrentUser();
  let subscriptionPlan;
  if (user) {
    subscriptionPlan = await trpc.stripe.userPlans.query();
  }
  return (
    <div className="min-h-screen bg-white sm:p-0 p-6">
      <Pricing subscriptionPlan={subscriptionPlan} userId={user?.id} />
      <Faq />
    </div>
  );
};

export default PricingPage;
