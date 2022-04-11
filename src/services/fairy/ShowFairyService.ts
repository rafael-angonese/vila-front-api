import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ShowFairyService {
    async execute(id: string): Promise<PrismaClient['Fairy']> {

        try {
            const fairy = await prismaClient.fairy.findFirst({
                where: {
                    id
                },
            })

            return fairy;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
