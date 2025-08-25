import {PrismaClient} from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

// this is prisma client setup setup file, and it's purpose is to avoid creating multiple prisma client instances while developement