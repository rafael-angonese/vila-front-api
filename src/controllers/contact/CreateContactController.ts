import { Request, Response } from "express";
import { CreateContactService } from "../../services/contact/CreateContactService";

const createService = new CreateContactService();

export class CreateContactController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, phone } = request.body

        const contact = await createService.execute({ name, email, phone });

        return response.json(contact)
    }
}