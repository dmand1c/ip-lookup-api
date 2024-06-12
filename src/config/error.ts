export class InvalidConfigurationError extends Error {
    constructor(message: string) {
        super(`Configuration error: ${message}`);
    }
}

