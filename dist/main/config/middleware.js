"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_type_1 = require("./../middlewares/content-type");
const cors_1 = require("./../middlewares/cors");
const body_parse_1 = require("./../middlewares/body-parse");
exports.default = (app) => {
    app.use(body_parse_1.bodyParse);
    app.use(cors_1.cors);
    app.use(content_type_1.contentType);
};
//# sourceMappingURL=middleware.js.map