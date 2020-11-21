"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body
        };
        const httpResponse = await controller.handle(httpRequest);
        if (httpResponse.statusCode > 200 || httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).send(httpResponse.body);
        }
        else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            });
        }
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-route-adapter.js.map