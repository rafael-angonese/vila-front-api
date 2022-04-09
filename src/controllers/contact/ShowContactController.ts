import { Request, Response } from "express";
import { ShowContactService } from "../../services/contact/ShowContactService";

const listService = new ShowContactService();

export class ShowContactController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const contacts = await listService.execute(id);

        return response.json(contacts)
    }
}