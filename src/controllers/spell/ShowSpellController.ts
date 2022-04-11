import { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { ShowSpellService } from "../../services/spell/ShowSpellService";

const showService = new ShowSpellService();

export class ShowSpellController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const spell = await showService.execute(id);

        if(!spell) {
            throw new NotFoundError()
        }

        return response.json(spell)
    }
}