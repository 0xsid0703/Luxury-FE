import { unstable_noStore as noStore } from "next/cache";

import prisma from "@/lib/prisma";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  mySubscription: protectedProcedure.query(async (opts) => {
    noStore();
    const userId = opts.ctx.userId as string;
    const customer = await prisma.customer.findFirst({
      where: {
        authUserId: userId,
      },
      select: {
        plan: true,
        stripeCurrentPeriodEnd: true,
      },
    });

    if (!customer) return null;
    return {
      plan: customer.plan,
      endsAt: customer.stripeCurrentPeriodEnd,
    };
  }),
});
