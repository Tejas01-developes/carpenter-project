"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userschema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    }
}, { timestamps: true });
const user_collection = mongoose_1.default.model("users", userschema);
exports.default = user_collection;
//# sourceMappingURL=schema.js.map