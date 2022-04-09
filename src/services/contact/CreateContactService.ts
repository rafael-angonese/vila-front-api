import { Contact } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";

type ContactRequest = {
    name: string;
    email: string;
    phone: string;
};

export class CreateContactService {
    async execute(contactParams: ContactRequest): Promise<Contact> {


        const contact = await prismaClient.contact.create({
            data: {
                ...contactParams,
            }
        })

        return contact;
    }
}
