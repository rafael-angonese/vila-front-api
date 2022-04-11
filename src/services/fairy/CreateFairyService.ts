import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

type FairyRequest = {
    name: string;
    element: string;
    health_point: number;
};

export class CreateFairyService {
    async execute(fairyParams: FairyRequest): Promise<PrismaClient['Fairy']> {

        try {
            const fairy = await prismaClient.fairy.create({
                data: {
                    ...fairyParams,
                }
            })

            return fairy;

        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
