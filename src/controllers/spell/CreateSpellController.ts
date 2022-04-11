import { Request, Response } from "express";
import { CreateSpellService } from "../../services/spell/CreateSpellService";

const createService = new CreateSpellService();

export class CreateSpellController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, element, spell_word, mana } = request.body

        const spell = await createService.execute({ name, element, spell_word, mana });

        return response.json(spell)
    }
}