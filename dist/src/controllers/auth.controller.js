"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const passport_1 = __importDefault(require("../middlewares/passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = 'Knowledge is Power';
class AuthController {
    showFormLogIn(req, res) {
        let error = req.flash('error');
        res.render('login', { error: error });
    }
    async authenticate(req, res) {
        if (!req.body.email || !req.body.password) {
            req.flash('error', 'Email & password cannot be blank');
            return res.redirect('/login');
        }
        let user = await user_model_1.default.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            req.flash('error', 'Wrong email or password');
            return res.redirect('/login');
        }
        else {
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