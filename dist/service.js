"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postdata = void 0;
const schema_1 = __importDefault(require("./schema"));
const postdata = async (data) => {
    return new Promise((resolve, reject) => {
        const { name, email, phone, age } = data;
        schema_1.default.create({ name, email, phone, age }).then(() => {
            resolve("success");
        })
            .catch((error) => {
            reject(error);
        });
    });
};
exports.postdata = postdata;
//# sourceMappingURL=service.js.map