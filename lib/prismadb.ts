import { PrismaClient } from "@prisma/client"

//add prisma client to global window

declare global {
    var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
//we do this check because of the way next reloads
//every time you reload you might have multiple PrismaClients
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;