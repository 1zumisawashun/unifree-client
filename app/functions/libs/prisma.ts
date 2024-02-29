/**
 * @see https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
 * @see https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#do-not-explicitly-disconnect
 */
import env from "@/functions/libs/env";
import { PrismaClient } from "@prisma/client";
import "server-only";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ["query"],
  });

if (!env.isProduction) globalForPrisma.prisma = prisma;
