import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";
import yup from "../config/yup";

interface IErrorResponse {
    path: string;
    type: string;
    message: string;
}

const validate = (schema: SchemaOf<unknown>) => async (request: Request, response: Response, next: NextFunction) => {
    try {
        await schema.validate(
            request.body,
            { abortEarly: false });

        return next();
    } catch (error) {

        let errors: IErrorResponse[] = []

        if (error instanceof yup.ValidationError) {
            errors = error.inner.map((item) => {
                return {
                    path: item.path ?? '',
                    type: item.type ?? 'validation',
                    message: item.message,
                }
            })
        }

        return response.status(422).json({ errors });
    }
};

export default validate