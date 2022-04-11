import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class DeleteContactService {
    async execute(id: string): Promise<PrismaClient['Contact']> {

        try {
            const contact = await prismaClient.contact.delete({
                where: { id },
            })

            return contact;
        } catch (error) {
            throw new PrismaError(error)
        }

    }
}
