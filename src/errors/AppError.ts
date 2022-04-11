export default class AppError {
    public readonly message: string;
    public readonly code: string;
    public readonly statusCode: number;

    constructor(message: string, code: string = '', statusCode = 400) {
        this.message = message
        this.code = code
        this.statusCode = statusCode
    }
}
