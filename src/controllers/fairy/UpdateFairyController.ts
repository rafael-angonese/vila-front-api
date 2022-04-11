import { Request, Response } from "express";
import { UpdateFairyService } from "../../services/fairy/UpdateFairyService";

const updateService = new UpdateFairyService();

export class UpdateFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const { name, element, gender } = request.body

        const fairy = await updateService.execute(id, { name, element, gender });

        return response.json(fairy)
    }
}