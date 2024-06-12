import { Router } from 'express';
import asyncRequestHandler from './Middleware/asyncRequestHandler';
import { Container } from 'typedi';
import { IpLookupController } from './Infrastructure/Controllers/IpLookupController';

export default (app: Router) => {
    app.get(
        '/lookup/:ip',
        asyncRequestHandler(async (request, response, next) => {
            return await Container.get(IpLookupController).lookupIp(request.params.ip, request);
        })
    );
};
