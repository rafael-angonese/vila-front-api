import { Request, Response, Router } from 'express'

import contactRoutes from './contact.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
    response.send('Hello World')
})

router.use('/contacts', contactRoutes)


export default router