"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const key = 'Knowledge is Power';
const checkAuth = (req, res, next) => {
    let cookie = req.cookies;
    if (!cookie.token)
        return res.redirect('/auth/login');
    let token = cookie.token;
    jsonwebtoken_1.default.verify(token, key, async (err, decoded) => {
        if (err) {
            return res.send(err);
        }
        let user = await user_model_1.default.findOne({ _id: decoded._id });
        if (!user) {
            return res.redirect('/auth/login');
        }
        req.decoded = decoded;
        next();
    });
};
exports.default = checkAuth;
//# sourceMappingURL=checkAuth.js.map