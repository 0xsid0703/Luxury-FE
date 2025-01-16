import { TRPCError } from "@trpc/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import prisma, { SubscriptionPlan } from "@/lib/prisma";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const k8sClusterCreateSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  location: z.string(),
});

const k8sClusterDeleteSchema = z.object({
  id: z.number(),
});

export const k8sRouter = createTRPCRouter({
  getClusters: protectedProcedure.query(async (opts) => {
    const session = await getServerSession(authOptions);
    const userId = opts.ctx.userId! as string;
    if (!session) {
      return;
    }
    return await prisma.k8sClusterConfig.findMany({
      where: {
        authUserId: userId,
      },
    });
  }),
  createCluster: protectedProcedure
    .input(k8sClusterCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId! as string;

      const session = await getServerSession(authOptions);
      if (!session) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to create a cluster",
        });
      }
      try {
        const newCluster = await prisma.k8sClusterConfig.create({
          data: {
            name: input.name,
            location: input.location,
            network: "Default",
            plan: SubscriptionPlan.FREE,
            authUserId: userId,
          },
          select: {
            id: true,
          },
        });
        

        if (!newCluster) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to create the cluster",
          });
        }

        return {
          id: newCluster.id,
          clusterName: input.name,
          location: input.location,
          success: true,
        };
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new TRPCError({ code: "BAD_REQUEST", cause: error });
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", cause: error });
      }
    }),
  updateCluster: protectedProcedure
    .input(k8sClusterCreateSchema)
    .mutation(async (opts) => {
      const id = opts.input.id!;
      const userId = opts.ctx.userId!;
      const newName = opts.input.name;
      const newLocation = opts.input.location;

      const cluster = await prisma.k8sClusterConfig.findFirst({
        where: {
          id,
        },
      });
      if (!cluster) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Cluster not found",
        });
      }

      if (cluster.authUserId && cluster.authUserId !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You don't have access to this cluster",
        });
      }
      if (newName || newLocation) {
        const updateData: Record<string, string> = {};
        if (newName) updateData.name = newName;
        if (newLocation) updateData.location = newLocation;

        await prisma.k8sClusterConfig.update({
          where: {
            id,
          },
          data: updateData,
        });
      }
      return {
        success: true,
      };
    }),
  deleteCluster: protectedProcedure
    .input(k8sClusterDeleteSchema)
    .mutation(async (opts) => {
      const id = opts.input.id;
      const userId = opts.ctx.userId!;
      const cluster = await prisma.k8sClusterConfig.findFirst({
        where: {
          id,
        },
      });
      if (!cluster) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Cluster not found",
        });
      }
      if (cluster.authUserId && cluster.authUserId !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You don't have access to this cluster",
        });
      }
      await prisma.k8sClusterConfig.delete({
        where: {
          id,
        },
      });
      return { success: true };
    }),
});
