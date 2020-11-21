"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_factory_1 = require("./../factories/controllers/home/home-controller-factory");
const express_route_adapter_1 = require("./../adapters/express-route-adapter");
exports.default = (router) => {
    router.get('/', express_route_adapter_1.adaptRoute(home_controller_factory_1.makeHomeController()));
};
//# sourceMappingURL=home-routes.js.map