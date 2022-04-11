import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { ShowFairyService } from "./ShowFairyService";

const showService = new ShowFairyService();

type FairyRequest = {
    name: string;
    element: string;
    gender: string;
};

export class UpdateFairyService {
    async execute(id: string, fairyParams: FairyRequest): Promise<PrismaClient['Fairy']> {

        const fairy = await showService.execute(id)

        if (!fairy) {
            throw new Error('Not Found Fairy')
        }

        const update = await prismaClient.fairy.update({
            where: {
                id: id
            },
            data: {
                ...fairyParams,
            }
        })

        return update;
    }
}
