import { Request, Response } from "express";
import { DeleteContactService } from "../../services/contact/DeleteContactService";

const deleteService = new DeleteContactService();

export class DeleteContactController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const contacts = await deleteService.execute(id);

        return response.json(contacts)
    }
}