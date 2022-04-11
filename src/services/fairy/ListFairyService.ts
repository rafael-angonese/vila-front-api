import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ListFairyService {
    async execute(): Promise<PrismaClient['Fairy'][]> {

        try {
            const fairies = await prismaClient.fairy.findMany()

            return fairies;
            
        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
