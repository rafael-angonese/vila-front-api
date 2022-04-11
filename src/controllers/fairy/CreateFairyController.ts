import { Request, Response } from "express";
import { CreateFairyService } from "../../services/fairy/CreateFairyService";

const createService = new CreateFairyService();

export class CreateFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, element, gender } = request.body

        const fairy = await createService.execute({ name, element, gender });

        return response.json(fairy)
    }
}