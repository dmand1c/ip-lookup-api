export class HttpError extends Error {
    readonly message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
    }

    public getMessage(): string {
        return this.message;
    }
}
