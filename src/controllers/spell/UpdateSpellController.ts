import { Request, Response } from "express";
import { UpdateSpellService } from "../../services/spell/UpdateSpellService";

const updateService = new UpdateSpellService();

export class UpdateSpellController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        const { name, element, spell_word, mana } = request.body

        const spell = await updateService.execute(id, { name, element, spell_word, mana });

        return response.json(spell)
    }
}