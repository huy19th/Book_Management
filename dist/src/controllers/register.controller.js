"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Salt = 10;
class RegisterController {
    showFormRegister(req, res) {
        let array = req.flash('error');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message;
            }
        });
        res.render('register', { error: error });
    }
    async register(req, res) {
        try {
            let user = new user_model_1.default(req.body);
            bcrypt_1.default.hash(user.password, Salt, async (err, hash) => {
                if (err)
                    throw err;
                user.password = hash;
                await user.save();
                req.flash('message', 'Register Successed!');
                res.redirect('/login');
            });
        }
        catch (err) {
            req.flash('error', err.errors);
            res.redirect('/register');
        }
    }
}
let registerController = new RegisterController();
exports.default = registerController;
//# sourceMappingURL=register.controller.js.map