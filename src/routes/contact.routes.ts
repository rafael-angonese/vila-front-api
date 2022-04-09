import { Router } from 'express'
import { CreateContactController } from '../controllers/contact/CreateContactController'
import { ListContactController } from '../controllers/contact/ListContactController'

const createController = new CreateContactController()
const listController = new ListContactController()


const router = Router()

router.get('/', listController.handle)
router.post('/', createController.handle)

export default router