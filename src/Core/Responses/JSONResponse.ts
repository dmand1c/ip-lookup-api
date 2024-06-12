import * as HttpStatus from "http-status-codes"

export class JSONResponse {

    private readonly data: any;
    private readonly statusCode: number;

    constructor(data: any, statusCode: number = HttpStatus.OK) {
        this.data = data;
        this.statusCode = statusCode;
    }

    public getData(): any {
        return this.data;
    }

    public getStatusCode(): number {
        return this.statusCode;
    }

}
