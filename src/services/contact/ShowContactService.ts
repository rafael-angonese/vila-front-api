import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class ShowContactService {
    async execute(id: string): Promise<PrismaClient['Contact']> {

        const contact = await prismaClient.contact.findUnique({
            where: {
                id
            },
        })

        return contact;
    }
}
