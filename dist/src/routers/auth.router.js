"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const passport_1 = __importDefault(require("../middlewares/passport"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
let upload = (0, multer_1.default)();
let router = express_1.default.Router();
router.get("/", auth_controller_1.default.showFormLogIn);
router.post('/', upload.none(), auth_controller_1.default.authenticate);
router.get('/google', auth_controller_1.default.showFormLogInGoogle);
router.get("/google/callback", passport_1.default.authenticate('google'), (req, res) => {
    res.send("You are authenticated");
});
exports.default = router;
//# sourceMappingURL=auth.router.js.map