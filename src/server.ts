import express, { NextFunction, Request, Response } from 'express';


const app = express()

app.use(express.json())
// app.use(routes)

app.get('/', (request: Request, response: Response) => {
    response.send('Hello World')
})


app.listen(3333, () => {
    console.log('Server listening on port: 3333')
})