import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

type SpellRequest = {
    name: string;
    element: string;
    spell_word: string;
    mana: number;
};

export class CreateSpellService {
    async execute(spellParams: SpellRequest): Promise<PrismaClient['Spell']> {

        try {
            const spell = await prismaClient.spell.create({
                data: {
                    ...spellParams,
                }
            })

            return spell;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
