"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_routes_1 = __importDefault(require("../routes/home-routes"));
exports.default = (app) => {
    const router = express_1.Router();
    app.use('/api', router);
    home_routes_1.default(router);
};
//# sourceMappingURL=routes.js.map