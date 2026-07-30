"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controller_1 = require("./controller");
const routes = (fastify) => {
    fastify.post("/", controller_1.getdata);
};
exports.routes = routes;
exports.default = exports.routes;
//# sourceMappingURL=route.js.map