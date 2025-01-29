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
  return (
    <div className="w-full">
      <div className="pt-36 flex flex-col gap-12 items-center text-white">
        <div className="flex flex-col items-center sm:gap-7 gap-5">
          <div className="sm:text-7xl text-4xl text-[#0B1934]">Pricing</div>
          <div className="text-center sm:text-lg text-sm text-[#0B1934]">
            Unlike traditional collectors, our platform lets you claim assets
            anytime
            <br className="sm:block hidden"/> or store them in secure vaults. Sell easily through our
            secondary{" "}
          </div>
        </div>
        <div className="flex md:flex-row gap-3 flex-col sm:w-fit w-full">
          <div className="sm:min-w-[420px] w-full rounded-[30px] bg-[#F9F7F6] sm:p-10 p-8 flex flex-col sm:gap-8 gap-4 items-start">
            <div className="flex flex-col gap-4">
              <div className="text-[#8C99A1] text-sm sm:text-xl">FREE</div>
              <div className="sm:text-6xl text-3xl text-[#051D1D]">
                $0 <span className="sm:text-base text-sm text-[#8C99A1]">/mo</span>
              </div>
            </div>
            <div className="bg-[#051D1D] h-[1px] bg-opacity-10"></div>
            <div className="flex flex-col gap-4 sm:mb-12 mb-6">
              <div className="text-lg font-semibold text-[#051D1D]">
                Plan includes:
              </div>
              <div className="flex flex-col gap-2 text-[#051D1D] sm:text-base text-sm">
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
            <div className="w-full flex items-center justify-center">
              {userId && subscriptionPlan ? (
                <BillingFormButton
                  pricing={0}
                  subscriptionPlan={subscriptionPlan}
                />
              ) : (
                <div className="w-full rounded-full justify-center flex flex-row text-[#F3CF72] gap-3 bg-[#1F1B16] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}>
                  <span>Sign Up</span>
                </div>
              )}
            </div>
          </div>
          <div className="sm:min-w-[420px] w-full rounded-[30px] bg-[#0B1934] sm:p-10 p-8 flex flex-col sm:gap-8 gap-4">
            <div className="flex flex-col gap-4 text-white">
              <div className="text-[#DBE3E4] sm:text-xl text-base">PREMIUM</div>
              <div className="sm:text-6xl text-3xl">
                $49 <span className="sm:text-base text-sm">/mo</span>
              </div>
            </div>
            <div className="bg-[#051D1D] h-[1px] bg-opacity-10"></div>
            <div className="flex flex-col gap-4 text-white sm:mb-12 mb-6">
              <div className="sm:text-lg text-sm font-semibold">Plan includes:</div>
              <div className="flex flex-col gap-2 sm:text-base text-sm">
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
              <div className="w-full rounded-full justify-center flex flex-row text-[#F3CF72] gap-3 bg-[#1F1B16] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all" onClick={signInModal.onOpen}>
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
