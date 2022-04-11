import { Request, Response } from "express";
import { DeleteSpellService } from "../../services/spell/DeleteSpellService";

const deleteService = new DeleteSpellService();

export class DeleteSpellController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const spell = await deleteService.execute(id);

        return response.json(spell)
    }
}