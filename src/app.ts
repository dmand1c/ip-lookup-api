import express, {Router} from "express";
import 'reflect-metadata';
import setupRoutes from "./config/routes";
import setupServices from "./config/services";
import {Container} from "typedi";
import config from "./config";
import {Logger} from "winston";
import setupSwagger from "./config/swaggerSetup";
import dotenv from 'dotenv';
dotenv.config();


(async () => {
    setupServices();

    const app = express();
    app.set("port", config.port);

    setupSwagger(app);

    const router: Router = Router();
    setupRoutes(router);
    app.use(config.apiPrefix, router);


    app.listen(app.get("port"), () => {
        console.log(`Server is running on port ${config.port}`);
        const logger = Container.get<Logger>("Logger");
        logger.info(`App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
    });

})();