import { Request, Response } from "express";
import { DeleteFairyService } from "../../services/fairy/DeleteFairyService";

const deleteService = new DeleteFairyService();

export class DeleteFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const fairy = await deleteService.execute(id);

        return response.json(fairy)
    }
}