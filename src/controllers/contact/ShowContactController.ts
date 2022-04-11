import { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { ShowContactService } from "../../services/contact/ShowContactService";

const showService = new ShowContactService();

export class ShowContactController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const contact = await showService.execute(id);

        if (!contact) {
            throw new NotFoundError()
        }

        return response.json(contact)
    }
}