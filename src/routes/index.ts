import { Request, Response, Router } from 'express'

import contactRoutes from './contact.routes'
import fairyRoutes from './fairy.routes'
import spellRoutes from './spell.routes'

const router = Router()

router.get('/', (request: Request, response: Response) => {
    response.json({ hello: 'Welcome to Vila do Front API - Resilia' })
})

router.use('/contacts', contactRoutes)
router.use('/fairies', fairyRoutes)
router.use('/spells', spellRoutes)


export default router