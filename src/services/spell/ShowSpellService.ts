import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ShowSpellService {
    async execute(id: string): Promise<PrismaClient['Spell']> {

        try {
            const spell = await prismaClient.spell.findUnique({
                where: {
                    id
                },
            })

            return spell;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
