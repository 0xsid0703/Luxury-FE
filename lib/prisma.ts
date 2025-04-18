import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = prismaClientSingleton();

export * from "@/prisma/types";
export * from "@/prisma/enums";

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
