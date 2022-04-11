import { Request, Response } from "express";
import { CreateFairyService } from "../../services/fairy/CreateFairyService";

const createService = new CreateFairyService();

export class CreateFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, element, health_point } = request.body

        const fairy = await createService.execute({ name, element, health_point });

        return response.json(fairy)
    }
}