"use client"
import { UserSubscriptionPlan } from "@/types";
import { Check, X } from "lucide-react";
import React from "react";
import { BillingFormButton } from "./billing-form-button";
import { useSigninModal } from "@/hooks/use-signin-modal";
interface PricingProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}
const Pricing = ({ userId, subscriptionPlan }: PricingProps) => {
  const signInModal = useSigninModal();
  console.log({subscriptionPlan})
  return (
    <div className="w-full">
      <div className="pt-36 flex flex-col gap-12 items-center text-white">
        <div className="flex flex-col items-center">
          <div className="text-7xl">Pricing</div>
          <div className="text-center">
            Unlike traditional collectors, our platform lets you claim assets
            anytime
            <br /> or store them in secure vaults. Sell easily through our
            secondary{" "}
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="min-w-[420px] rounded-[30px] bg-[#2F2A24] p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="text-[#99A1A3] text-xl">Basic</div>
              <div className="text-6xl">
                $14 <span className="text-base">/mo</span>
              </div>
            </div>
            <div className="bg-[#051D1D] h-[1px] bg-opacity-10"></div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold">
                Plan includes:
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <Check />
                  Unlimited 1-1 meetings
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Stripe, Paypal integration
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Connect multiple calendars
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Stripe, Paypal integration{" "}
                </div>
                <div className="flex flex-row gap-2 text-[#777777]">
                  <X />
                  Route with Salesforce look-up
                </div>
                <div className="flex flex-row gap-2 text-[#777777]">
                  <X />
                  Mobile app & browser extension
                </div>
              </div>
            </div>
            {userId && subscriptionPlan ? (
              <BillingFormButton
                pricing={0}
                subscriptionPlan={subscriptionPlan}
              />
            ) : (
              <div className="w-full rounded-full justify-center flex flex-row text-[#F3CF72] gap-3 bg-[#1F1B16] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}>
                <span>Sign Up</span>
              </div>
            )}
          </div>
          <div className="min-w-[420px] rounded-[30px] bg-[#9C7C55] p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-white">
              <div className="text-[#DBE3E4] text-xl">Premium</div>
              <div className="text-6xl">
                $140 <span className="text-base">/mo</span>
              </div>
            </div>
            <div className="bg-[#051D1D] h-[1px] bg-opacity-10"></div>
            <div className="flex flex-col gap-4 text-white">
              <div className="text-lg font-semibold">Plan includes:</div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <Check />
                  Unlimited 1-1 meetings
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Stripe, Paypal integration
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Connect multiple calendars
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Stripe, Paypal integration{" "}
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Route with Salesforce look-up
                </div>
                <div className="flex flex-row gap-2">
                  <Check />
                  Mobile app & browser extension
                </div>
              </div>
            </div>
            {userId && subscriptionPlan ? (
              <BillingFormButton
                pricing={1}
                subscriptionPlan={subscriptionPlan}
              />
            ) : (
              <div className="w-full rounded-full justify-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}>
                <span>Sign Up</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
