import {Container} from "typedi";
import {IpLookupService} from "./Infrastructure/Services/IpLookupService";

const setupServices = () => {

    Container.set("IpLookupService", Container.get<IpLookupService>(IpLookupService));
};


export default setupServices;