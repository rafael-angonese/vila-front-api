import { Router } from 'express'
import { CreateSpellController } from '../controllers/spell/CreateSpellController'
import { ListSpellController } from '../controllers/spell/ListSpellController'
import { ShowSpellController } from '../controllers/spell/ShowSpellController'
import { UpdateSpellController } from '../controllers/spell/UpdateSpellController'
import { DeleteSpellController } from '../controllers/spell/DeleteSpellController'
import validate from '../middlewares/yup-validator'
import spellSchema from '../validators/spell.schema'

const createController = new CreateSpellController()
const listController = new ListSpellController()
const showController = new ShowSpellController()
const updateController = new UpdateSpellController()
const deleteController = new DeleteSpellController()

const router = Router()


/**
 * @route GET /spells
 * @group Spell
 * @returns {object} 200 - Spells list
 * @returns {Error}  default - Unexpected error
 */
router.get('/', listController.handle)

/**
 * @route POST /spells
 * @group Spell
 * @returns {object} 200 - Spell created
 * @param {string} name.body.required - Spell Name
 * @param {string} element.body.required - Spell element
 * @param {string} spell_word.body.required - Spell gender
 * @param {number} mana.body.required - Spell mana
 * @returns {Error}  default - Unexpected error
 */
router.post('/', validate(spellSchema), createController.handle)


/**
 * @route GET /spells/:id
 * @group Spell
 * @returns {object} 200 - Spell
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', showController.handle)

/**
 * @route PUT /spells/:id
 * @group Spell
 * @returns {object} 200 - Spell updated
 * @param {string} name.body.required - Spell Name
 * @param {string} element.body.required - Spell element
 * @param {string} spell_word.body.required - Spell gender
 * @param {number} mana.body.required - Spell mana
 * @returns {Error}  default - Unexpected error
 */
 router.put('/:id', validate(spellSchema), updateController.handle)

/**
 * @route DELETE /spells/:id
 * @group Spell
 * @returns {object} 200 - Spell
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', deleteController.handle)

export default router