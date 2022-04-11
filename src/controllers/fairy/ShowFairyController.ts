import { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { ShowFairyService } from "../../services/fairy/ShowFairyService";

const showService = new ShowFairyService();

export class ShowFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const fairy = await showService.execute(id);

        if(!fairy) {
            throw new NotFoundError()
        }

        return response.json(fairy)
    }
}