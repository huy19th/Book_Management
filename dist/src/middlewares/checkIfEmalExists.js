"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const checkIfEmailExist = async (req, res, next) => {
    let user = await user_model_1.default.findOne({ email: req.body.email });
    if (user) {
        req.flash('error', [{ email: { message: 'Email is already used' } }]);
        return res.redirect('/register');
    }
    else {
        next();
    }
};
exports.default = checkIfEmailExist;
//# sourceMappingURL=checkIfEmalExists.js.map