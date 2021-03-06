import { Router } from 'express'
import { CreateContactController } from '../controllers/contact/CreateContactController'
import { ListContactController } from '../controllers/contact/ListContactController'
import { ShowContactController } from '../controllers/contact/ShowContactController'
import { DeleteContactController } from '../controllers/contact/DeleteContactController'
import contactSchema from '../validators/contact.schema'
import validate from '../middlewares/yup-validator'

const createController = new CreateContactController()
const listController = new ListContactController()
const showController = new ShowContactController()
const deleteController = new DeleteContactController()

const router = Router()


/**
 * @route GET /contacts
 * @group Contact
 * @returns {object} 200 - Contacts list
 * @returns {Error}  default - Unexpected error
 */
router.get('/', listController.handle)

/**
 * @route POST /contacts
 * @group Contact
 * @returns {object} 200 - Contact created
 * @param {string} name.body.required - Contact Name
 * @param {string} email.body.required - Contact email
 * @param {string} phone.body.required - Contact phone
 * @returns {Error}  default - Unexpected error
 */
router.post('/', validate(contactSchema), createController.handle)


/**
 * @route GET /contacts/:id
 * @group Contact
 * @returns {object} 200 - Contact
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', showController.handle)

/**
 * @route DELETE /contacts/:id
 * @group Contact
 * @returns {object} 200 - Contact
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', deleteController.handle)

export default router