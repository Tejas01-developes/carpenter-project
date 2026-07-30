"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdata = void 0;
const zod_1 = __importDefault(require("zod"));
const service_1 = require("./service");
const userschema = zod_1.default.object({
    name: zod_1.default.string().min(3, "Name must be atleast three character"),
    email: zod_1.default.string().email("Invalid email format"),
    age: zod_1.default.number().min(18, "Must be atleast 18"),
    phone: zod_1.default.string().min(10, "Phone number must be atleast 10 digit")
});
const getdata = async (req, resp) => {
    const result = userschema.safeParse(req.body);
    if (!result.success) {
        return resp.status(400).send({ success: false, message: "Validation error", error: result.error.flatten().fieldErrors });
    }
    const { name, email, phone, age } = result.data;
    await (0, service_1.postdata)({ name, email, age, phone });
    return resp.status(200).send({ success: true, message: "registered" });
};
exports.getdata = getdata;
//# sourceMappingURL=controller.js.map