import {NextFunction, Request, RequestHandler, Response} from "express";
import { JSONResponse } from "../Responses/JSONResponse";

export default (requestHandler: RequestHandler): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userResponse: any = await requestHandler(req, res, next);
            if (userResponse instanceof JSONResponse) {
                res.set("Content-Type", "application/json");
                res.status(userResponse.getStatusCode());

                return res.send(userResponse.getData());
            }

            next(new Error("Response returned from requestHandler must be instance of JSONResponse"));
        } catch (e) {
            next(e);
        }
    }
};
