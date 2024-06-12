import {Service} from "typedi";

@Service()
export class IpValidator {

    private readonly IP_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    public validate(ip: any): boolean {

        const ipRegex = new RegExp(this.IP_ADDRESS_REGEX, "gi");

        return ipRegex.test(ip);
    }
}