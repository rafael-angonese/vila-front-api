import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class ListFairyService {
    async execute(): Promise<PrismaClient['Fairy'][]> {

        const fairies = await prismaClient.fairy.findMany()

        return fairies;
    }
}
