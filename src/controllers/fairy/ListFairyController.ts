import { Request, Response } from "express";
import { ListFairyService } from "../../services/fairy/ListFairyService";

const listService = new ListFairyService();

export class ListFairyController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { query } = request.query

        const fairies = await listService.execute({ query });

        return response.json(fairies)
    }
}