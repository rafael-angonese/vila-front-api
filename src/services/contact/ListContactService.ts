import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

export class ListContactService {
    async execute(): Promise<PrismaClient['Contact'][]> {

        const contacts = await prismaClient.contact.findMany()

        return contacts;
    }
}
