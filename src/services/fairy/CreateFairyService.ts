import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

type FairyRequest = {
    name: string;
    element: string;
    gender: string;
};

export class CreateFairyService {
    async execute(fairyParams: FairyRequest): Promise<PrismaClient['Fairy']> {

        const fairy = await prismaClient.fairy.create({
            data: {
                ...fairyParams,
            }
        })

        return fairy;
    }
}
