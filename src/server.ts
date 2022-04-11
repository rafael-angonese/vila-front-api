import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import 'dotenv'

import routes from './routes'
import swaggerOptions from './config/swagger.conf'
import AppError from './errors/AppError';

const app = express()

const expressSwagger = require('express-swagger-generator')(app)
expressSwagger(swaggerOptions)

app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json(err);
    }

    console.log(err)

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
        // message: `Internal server error - ${err.message}`,
    });
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Server listening on port: 3333')
})