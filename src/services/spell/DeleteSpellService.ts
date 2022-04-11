import { Spell } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { NotFoundError } from "../../errors/NotFoundError";
import { PrismaError } from "../../errors/PrismaError";
import { ShowSpellService } from "./ShowSpellService";

const showService = new ShowSpellService();

export class DeleteSpellService {
    async execute(id: string): Promise<Spell> {

        const spell = await showService.execute(id)

        if (!spell) {
            throw new NotFoundError()
        }

        try {
            const deleted = await prismaClient.spell.delete({
                where: { id },
            })

            return deleted;
        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
