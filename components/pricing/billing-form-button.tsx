"use client";

import { useTransition } from "react";

import * as Icons from "@/components/ui/icons";

import { trpc } from "@/trpc/client";
import type { UserSubscriptionPlan } from "@/types";
import { stripeENVData } from "@/config/stripe";
import { useRouter } from "next/navigation";

interface BillingFormButtonProps {
    pricing: number;
    subscriptionPlan: UserSubscriptionPlan;
}

export function BillingFormButton({
    pricing,
    subscriptionPlan,
}: BillingFormButtonProps) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    async function createSession(planId: string) {
        const res = await trpc.stripe.createSession.mutate({ planId: planId });
        if (res?.url) window.location.href = res?.url;
    }

    const stripePlanId = pricing === 0 ? stripeENVData?.freePlanId : stripeENVData?.premiumPlanId;
    const stripeSessionAction = () => {
        if (pricing === 0 && stripePlanId == stripeENVData?.freePlanId) router.push("/");
        startTransition(async () => await createSession(stripePlanId!));
    };

    return (
        <button
            className="w-full bg-transparent sm:text-base text-sm flex items-center justify-center"
            disabled={isPending}
            onClick={stripeSessionAction}
        >
            {
                pricing == 0 ? <>
                    {
                        isPending ? (
                            <>
                                <div className="w-full rounded-full justify-center items-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                                    <span>Loading ...</span>
                                </div>
                            </>
                        ) : (
                            <>
                                {subscriptionPlan.title === "Free"
                                    ? <div className="w-full rounded-full justify-center items-center flex flex-row text-white gap-3 bg-[#A88573] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
                                        <span>Go to Dashboard</span>
                                        <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    </div>
                                    : <div className="w-full rounded-full justify-center items-center flex flex-row text-white gap-3 bg-[#A88573] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
                                        <span>Choose Free</span>
                                        <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    </div>}
                            </>
                        )
                    }
                </> : <>
                    {isPending ? (
                        <>
                            <div className="w-full rounded-full justify-center items-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
                                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                                <span>Loading ...</span>
                            </div>
                        </>
                    ) : (
                        <>
                            {subscriptionPlan.stripePriceId === stripeENVData?.premiumPlanId
                                ? <div className="w-full rounded-full justify-center items-center flex flex-row text-[#0B1934] gap-3 bg-[#A88573] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
                                    <span>Manage Subscription</span>
                                </div> :

                                <div className="w-full rounded-full justify-center items-center flex flex-row text-[#0B1934] gap-3 bg-[#A88573] border-4 border-[#D49F5E] border-opacity-15 sm:py-4 py-3 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_#F3CF72] hover:-translate-y-2 transition-all">
                                    <span>Choose Premium</span>
                                </div>
                            }
                        </>
                    )
                    }
                </>
            }
        </button>
    );
}
