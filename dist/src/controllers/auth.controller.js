"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const passport_1 = __importDefault(require("../middlewares/passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const key = 'Knowledge is Power';
class AuthController {
    showFormLogIn(req, res) {
        let error = req.flash('error');
        let message = req.flash('message');
        res.render('login', { error: error, message: message });
    }
    async authenticate(req, res) {
        if (!req.body.email || !req.body.password) {
            console.log('Email & password cannot be blank');
            req.flash('error', 'Email & password cannot be blank');
            return res.redirect('/login');
        }
        let user = await user_model_1.default.findOne({ email: req.body.email });
        if (!user) {
            console.log `User doesn't exist`;
            req.flash('error', `User doesn't exist`);
            return res.redirect('/login');
        }
        bcrypt_1.default.compare(req.body.password, user.password, (err, result) => {
            console.log('checking password done');
            if (err)
                throw err;
            console.log('checking password done');
            if (result) {
                let payload = {
                    _id: user._id,
                    role: user.role
                };
                let token = jsonwebtoken_1.default.sign(payload, key, { expiresIn: '1h' });
                res.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000
                });
                res.redirect(user.role == 'admin' ? '/dashboard' : 'book');
            }
            else {
                req.flash('error', 'Wrong email or password');
                res.redirect('/login');
            }
        });
    }
    showFormLogInGoogle() {
        passport_1.default.authenticate('google', { scope: ['profile', 'email'] });
    }
    googleAuthenticate() {
        passport_1.default.authenticate('google');
    }
}
let authController = new AuthController();
exports.default = authController;
//# sourceMappingURL=auth.controller.js.map