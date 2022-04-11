import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { NotFoundError } from "../../errors/NotFoundError";
import { PrismaError } from "../../errors/PrismaError";
import { ShowFairyService } from "./ShowFairyService";

const showService = new ShowFairyService();

type FairyRequest = {
    name: string;
    element: string;
    health_point: string;
};

export class UpdateFairyService {
    async execute(id: string, fairyParams: FairyRequest): Promise<PrismaClient['Fairy']> {

        const fairy = await showService.execute(id)

        if (!fairy) {
            throw new NotFoundError()
        }

        try {
            const update = await prismaClient.fairy.update({
                where: {
                    id: id
                },
                data: {
                    ...fairyParams,
                }
            })

            return update;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
