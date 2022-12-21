"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const register_controller_1 = __importDefault(require("../controllers/register.controller"));
const checkIfEmailExists_1 = __importDefault(require("../middlewares/checkIfEmailExists"));
let upload = (0, multer_1.default)();
let router = express_1.default.Router();
router.get("/", register_controller_1.default.showFormRegister);
router.post('/', upload.none(), checkIfEmailExists_1.default, register_controller_1.default.register);
exports.default = router;
//# sourceMappingURL=register.router.js.map