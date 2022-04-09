import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class DeleteContactService {
    async execute(id: string): Promise<PrismaClient['Contact']> {

        const contact = await prismaClient.contact.delete({
            where: { id },
        })

        return contact;
    }
}
