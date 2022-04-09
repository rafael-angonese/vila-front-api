import { Request, Response } from "express";
import { ListContactService } from "../../services/contact/ListContactService";

const listService = new ListContactService();

export class ListContactController {
    async handle(request: Request, response: Response): Promise<Response> {

        const contacts = await listService.execute();

        return response.json(contacts)
    }
}