import { Spell } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ListSpellService {
    async execute(): Promise<Spell[]> {

        try {
            const spells = await prismaClient.spell.findMany()

            return spells;
            
        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
