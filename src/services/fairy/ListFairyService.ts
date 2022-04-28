import { Fairy } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

type FairyRequest = {
    query?: any;
};

export class ListFairyService {
    async execute(params: FairyRequest): Promise<Fairy[]> {

        try {
            const fairies = await prismaClient.fairy.findMany({
                where: {
                    name: {
                        contains: params.query
                    }
                }
            })

            return fairies;
            
        } catch (error) {
            throw new PrismaError(error)
        }
    }
}
