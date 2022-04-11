import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { NotFoundError } from "../../errors/NotFoundError";
import { PrismaError } from "../../errors/PrismaError";
import { ShowFairyService } from "./ShowFairyService";

const showService = new ShowFairyService();
export class DeleteFairyService {
    async execute(id: string): Promise<PrismaClient['Fairy']> {

        const fairy = await showService.execute(id)

        if (!fairy) {
            throw new NotFoundError()
        }

        try {
            const deleted = await prismaClient.fairy.delete({
                where: { id },
            })

            return deleted;
        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
