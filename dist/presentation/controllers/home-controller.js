"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const http_helper_1 = require("../helpers/http/http-helper");
class HomeController {
    handle(httpRequest) {
        return Promise.resolve(http_helper_1.ok({
            message: 'ok'
        }));
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home-controller.js.map