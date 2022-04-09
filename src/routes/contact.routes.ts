import { Router } from 'express'
import { CreateContactController } from '../controllers/contact/CreateContactController'
import { ListContactController } from '../controllers/contact/ListContactController'
import { ShowContactController } from '../controllers/contact/ShowContactController'

const createController = new CreateContactController()
const listController = new ListContactController()
const showController = new ShowContactController()


const router = Router()

router.get('/', listController.handle)
router.post('/', createController.handle)
router.get('/:id', showController.handle)

export default router