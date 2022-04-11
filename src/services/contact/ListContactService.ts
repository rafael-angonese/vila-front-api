import { Contact } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

export class ListContactService {
    async execute(): Promise<Contact[]> {

        try {
            const contacts = await prismaClient.contact.findMany()

            return contacts;
        } catch (error) {
            throw new PrismaError(error)
        }

    }
}
