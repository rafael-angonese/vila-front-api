import AppError from "./AppError";

export class NotFoundError extends AppError {
    constructor() {
        super('Registro não encontrado', 'NOT_FOUND', 404);
    }
}