import {Router} from "express";
import setupCoreRoutes from '../Core/routes';

export default (app: Router) => {
    setupCoreRoutes(app);
};