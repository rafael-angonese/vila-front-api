import AppError from "./AppError";

export class PrismaError extends AppError {
    constructor(error: unknown) {
        super('Houve um erro no banco de dados', 'PRISMA_ERROR', 500);
    }
}