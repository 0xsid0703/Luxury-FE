import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import prisma, { SubscriptionPlan } from "@/lib/prisma";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const updateUserNameSchema = z.object({
  name: z.string(),
  userId: z.string(),
});
const insertCustomerSchema = z.object({
  userId: z.string(),
});
z.object({
  userId: z.string(),
});
export const customerRouter = createTRPCRouter({
  updateUserName: protectedProcedure
    .input(updateUserNameSchema)
    .mutation(async ({ input }) => {
      const { userId } = input;
      const session = await getServerSession(authOptions);
      if (!session?.user || userId !== session?.user.id) {
        return { success: false, reason: "no auth" };
      }
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name: input.name,
        },
      });
      return { success: true, reason: "" };
    }),

  insertCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .mutation(async ({ input }) => {
      const { userId } = input;
      await prisma.customer.create({
        data: {
          authUserId: userId,
          plan: SubscriptionPlan.FREE,
        },
      });
    }),

  queryCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .query(async ({ input }) => {
      noStore();
      const { userId } = input;
      console.log("userId:", userId);
      try {
        console.log(
          "result:",
          await prisma.customer.findFirst({
            where: {
              authUserId: userId,
            },
            select: {
              plan: true,
              stripeCurrentPeriodEnd: true,
            },
          }),
        );
      } catch (e) {
        console.error("e:", e);
      }

      return await prisma.customer.findFirst({
        where: {
          authUserId: userId,
        },
        select: {
          plan: true,
          stripeCurrentPeriodEnd: true,
        },
      });
    }),
});
