import { Contact } from "../../../prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { NotFoundError } from "../../errors/NotFoundError";
import { PrismaError } from "../../errors/PrismaError";
import { ShowContactService } from "./ShowContactService";

const showService = new ShowContactService();

export class DeleteContactService {
    async execute(id: string): Promise<Contact> {

        const contact = await showService.execute(id)

        if (!contact) {
            throw new NotFoundError()
        }

        try {
            const deleted = await prismaClient.contact.delete({
                where: { id },
            })

            return deleted;
        } catch (error) {
            throw new PrismaError(error)
        }

    }
}
