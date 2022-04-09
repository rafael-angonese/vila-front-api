import express, { NextFunction, Request, Response } from 'express';

import routes from './routes'
import swaggerOptions from './config/swagger.conf'

const app = express()

const expressSwagger = require('express-swagger-generator')(app)
expressSwagger(swaggerOptions)

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Server listening on port: 3333')
})