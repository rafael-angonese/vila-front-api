import { Request, Response } from "express";
import { ListSpellService } from "../../services/spell/ListSpellService";

const listService = new ListSpellService();

export class ListSpellController {
    async handle(request: Request, response: Response): Promise<Response> {

        const spells = await listService.execute();

        return response.json(spells)
    }
}