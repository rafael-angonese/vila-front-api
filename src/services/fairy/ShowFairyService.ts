import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class ShowFairyService {
    async execute(id: string): Promise<PrismaClient['Fairy']> {

        const fairy = await prismaClient.fairy.findUnique({
            where: {
                id
            },
        })

        return fairy;
    }
}
