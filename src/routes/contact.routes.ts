import { Router } from 'express'
import { CreateContactController } from '../controllers/contact/CreateContactController'
import { ListContactController } from '../controllers/contact/ListContactController'
import { ShowContactController } from '../controllers/contact/ShowContactController'
import { DeleteContactController } from '../controllers/contact/DeleteContactController'

const createController = new CreateContactController()
const listController = new ListContactController()
const showController = new ShowContactController()
const deleteController = new DeleteContactController()

const router = Router()

router.get('/', listController.handle)
router.post('/', createController.handle)
router.get('/:id', showController.handle)
router.delete('/:id', deleteController.handle)

export default router