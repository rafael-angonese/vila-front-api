import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { PrismaError } from "../../errors/PrismaError";

type ContactRequest = {
    name: string;
    email: string;
    phone: string;
};

export class CreateContactService {
    async execute(contactParams: ContactRequest): Promise<PrismaClient['Contact']> {

        try {
            const contact = await prismaClient.contact.create({
                data: {
                    ...contactParams,
                }
            })

            return contact;
        } catch (error) {
            throw new PrismaError(error)
        }

    }
}
