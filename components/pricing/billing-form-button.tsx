"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import * as Icons from "@/components/ui/icons";

import { trpc } from "@/trpc/client";
import type { UserSubscriptionPlan } from "@/types";
import { stripeENVData } from "@/config/stripe";
import { ArrowRight } from "lucide-react";

interface BillingFormButtonProps {
    pricing: number;
    subscriptionPlan: UserSubscriptionPlan;
}

export function BillingFormButton({
    pricing,
    subscriptionPlan,
}: BillingFormButtonProps) {
    const [isPending, startTransition] = useTransition();

    async function createSession(planId: string) {
        const res = await trpc.stripe.createSession.mutate({ planId: planId });
        if (res?.url) window.location.href = res?.url;
    }

    const stripePlanId = pricing === 0 ? stripeENVData?.basicPlanId : stripeENVData?.premiumPlanId;
    const stripeSessionAction = () =>{
        startTransition(async () => await createSession(stripePlanId!))
    };

    return (
        <Button
            variant="default"
            className="w-full bg-transparent"
            disabled={isPending}
            onClick={stripeSessionAction}
        >
            {
                pricing == 0 ? <>
                    {
                        isPending ? (
                            <>
                                <div className="w-full rounded-full justify-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                                    <span>Loading ...</span>
                                </div>
                            </>
                        ) : (
                            <>
                                {subscriptionPlan.stripePriceId
                                ? <div className="w-full rounded-full justify-center flex flex-row text-[#F3CF72] gap-3 bg-[#1F1B16] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <span>Manage Subscription</span>
                                    <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    <ArrowRight />
                                </div>
                                : <div className="w-full rounded-full justify-center flex flex-row text-[#F3CF72] gap-3 bg-[#1F1B16] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <span>Choose Basic</span>
                                    <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    <ArrowRight />
                                </div>}
                            </>
                        )
                    }
                </> : <>
                    {isPending ? (
                        <>
                            <div className="w-full rounded-full justify-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
                                <span>Loading ...</span>
                            </div>
                        </>
                    ) : (
                        <>
                            {subscriptionPlan.stripePriceId
                                ? <div className="w-full rounded-full justify-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <span>Manage Subscription</span>
                                    <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    <ArrowRight />
                                </div>
                                : <div className="w-full rounded-full justify-center flex flex-row text-[#1F1B16] gap-3 bg-[#DBE3E4] border-4 border-[#D49F5E] border-opacity-15 py-4 font-semibold cursor-pointer hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all">
                                    <span>Choose Premium</span>
                                    <div className="w-[1px] bg-[#E8E8E8]"></div>
                                    <ArrowRight />
                                </div>}
                        </>
                    )
                    }
                </>
            }
        </Button >
    );
}
