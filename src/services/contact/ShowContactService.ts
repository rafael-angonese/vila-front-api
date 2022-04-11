import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ShowContactService {
    async execute(id: string): Promise<PrismaClient['Contact']> {

        try {
            const contact = await prismaClient.contact.findUnique({
                where: {
                    id
                },
            })

            return contact;
        } catch (error) {
            throw new PrismaError(error)
        }
        
    }
}
