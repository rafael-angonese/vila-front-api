import { Request, Response, Router } from 'express'

import contactRoutes from './contact.routes'
import fairyRoutes from './fairy.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
    response.send('Hello World')
})

router.use('/contacts', contactRoutes)
router.use('/fairies', fairyRoutes)


export default router