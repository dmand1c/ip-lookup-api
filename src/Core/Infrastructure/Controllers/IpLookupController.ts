import { Service, Inject } from "typedi";
import { Request } from "express";
import { JSONResponse } from "../../Responses/JSONResponse";
import { IpLookupService } from "../Services/IpLookupService";
import { IpValidator } from "../../Application/Validators/IpValidator";
import { BadRequestError } from "../../Errors/BadRequestError";

@Service()
export class IpLookupController {

    @Inject()
    private readonly ipLookupService: IpLookupService;

    @Inject()
    private readonly ipValidator: IpValidator;


    /**
     * @swagger
     * /lookup/{ip}:
     *   get:
     *     summary: Lookup IP information
     *     description: Get information about a specific IP address.
     *     parameters:
     *       - in: path
     *         name: ip
     *         schema:
     *           type: string
     *         required: true
     *         description: IP address to lookup
     *     responses:
     *       200:
     *         description: Successfully retrieved IP information
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Invalid IP address
     *       500:
     *         description: Internal server error
     */
    public async lookupIp(ip: string, request: Request): Promise<JSONResponse> {

        const validation = this.ipValidator.validate(ip);
        if (!validation) {
            throw new BadRequestError("Given string is not valid IP address, please enter valid IP address");
        }

        const data = await this.ipLookupService.getIPInfo(ip);

        return new JSONResponse(data);
    }
}