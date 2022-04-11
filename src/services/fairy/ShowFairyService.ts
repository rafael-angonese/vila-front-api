import { Fairy } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ShowFairyService {
    async execute(id: string): Promise<Fairy | null> {

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
