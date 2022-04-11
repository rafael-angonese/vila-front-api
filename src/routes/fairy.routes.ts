import { Router } from 'express'
import { CreateFairyController } from '../controllers/fairy/CreateFairyController'
import { ListFairyController } from '../controllers/fairy/ListFairyController'
import { ShowFairyController } from '../controllers/fairy/ShowFairyController'
import { UpdateFairyController } from '../controllers/fairy/UpdateFairyController'
import { DeleteFairyController } from '../controllers/fairy/DeleteFairyController'

const createController = new CreateFairyController()
const listController = new ListFairyController()
const showController = new ShowFairyController()
const updateController = new UpdateFairyController()
const deleteController = new DeleteFairyController()

const router = Router()


/**
 * @route GET /fairies
 * @group Fairy
 * @returns {object} 200 - Fairies list
 * @returns {Error}  default - Unexpected error
 */
router.get('/', listController.handle)

/**
 * @route POST /fairies
 * @group Fairy
 * @returns {object} 200 - Fairy created
 * @param {string} name.body.required - Fairy Name
 * @param {string} element.body.required - Fairy element
 * @param {string} gender.body - Fairy gender
 * @returns {Error}  default - Unexpected error
 */
router.post('/', createController.handle)


/**
 * @route GET /fairies/:id
 * @group Fairy
 * @returns {object} 200 - Fairy
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', showController.handle)

/**
 * @route PUT /fairies/:id
 * @group Fairy
 * @returns {object} 200 - Fairy updated
 * @param {string} name.body.required - Fairy Name
 * @param {string} element.body.required - Fairy element
 * @param {string} gender.body - Fairy gender
 * @returns {Error}  default - Unexpected error
 */
 router.put('/:id', updateController.handle)

/**
 * @route DELETE /fairies/:id
 * @group Fairy
 * @returns {object} 200 - Fairy
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', deleteController.handle)

export default router