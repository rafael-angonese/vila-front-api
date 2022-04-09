import { Router } from 'express'
import { CreateContactController } from '../controllers/contact/ContactController'

const createController = new CreateContactController()


const router = Router()

router.post('/', createController.handle)


export default router