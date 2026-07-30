"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const formbody_1 = __importDefault(require("@fastify/formbody"));
const dbconnect_1 = __importDefault(require("./dbconnect"));
const fastify_1 = __importDefault(require("fastify"));
const route_1 = __importDefault(require("./route"));
const app = (0, fastify_1.default)({ logger: true });
app.register(cors_1.default, {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});
app.register(formbody_1.default);
app.register(route_1.default, { prefix: "/apis" });
app.listen({ port: 4000 }, async () => {
    await dbconnect_1.default.connect();
    console.log("Server started on the port 4000");
});
//# sourceMappingURL=app.js.map