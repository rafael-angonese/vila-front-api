import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { NotFoundError } from "../../errors/NotFoundError";
import { PrismaError } from "../../errors/PrismaError";
import { ShowSpellService } from "./ShowSpellService";

const showService = new ShowSpellService();

type SpellRequest = {
    name: string;
    element: string;
    spell_word: string;
    mana: number;
};

export class UpdateSpellService {
    async execute(id: string, spellParams: SpellRequest): Promise<PrismaClient['Spell']> {

        const spell = await showService.execute(id)

        if (!spell) {
            throw new NotFoundError()
        }

        try {
            const update = await prismaClient.spell.update({
                where: {
                    id: id
                },
                data: {
                    ...spellParams,
                }
            })

            return update;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
