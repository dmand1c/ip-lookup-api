import {Container} from "typedi";
import setupCoreServices from "../Core/services";
import WinstonLogger from "../Core/Middleware/Logger";


const setupServices = () => {
    Container.set("Logger", WinstonLogger);
    setupCoreServices();
};

export default setupServices;