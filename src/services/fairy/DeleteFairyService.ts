import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class DeleteFairyService {
    async execute(id: string): Promise<PrismaClient['Fairy']> {

        const fairy = await prismaClient.fairy.delete({
            where: { id },
        })

        return fairy;
    }
}
