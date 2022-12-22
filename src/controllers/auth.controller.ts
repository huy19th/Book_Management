import UserModel from '../models/user.model';
import passport from '../middlewares/passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const key = 'Knowledge is Power';

class AuthController {
    showFormLogIn(req, res) {
        let error = req.flash('error');
        let message = req.flash('message')
        res.render('sharing/login', { error: error , message: message});
    }
    async authenticate(req, res) {
        if (!req.body.email || !req.body.password) {
            console.log('Email & password cannot be blank')
            req.flash('error', 'Email & password cannot be blank');
            return res.redirect('/login');
        }
        console.log(req.body);
        let user = await UserModel.findOne({ email: req.body.email });
        console.log(user)
        if (!user) {
            console.log`User doesn't exist`
            req.flash('error', `User doesn't exist`);
            return res.redirect('/login');
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            console.log('checking password done')
            if (err) throw err;
            console.log('checking password done')
            if (result) {
                let payload = {
                    _id: user._id,
                    role: user.role
                }
                let token = jwt.sign(payload, key, { expiresIn: '1h' });
                res.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000
                })
                res.redirect(user.role == 'admin' ? '/admin/dashboard' : '/user/dashboard');
            }
            else {
                req.flash('error', 'Wrong email or password');
                res.redirect('/login');
            }
        });


    }
    showFormLogInGoogle() {
        passport.authenticate('google', { scope: ['profile', 'email'] });
    }
    googleAuthenticate() {
        passport.authenticate('google');
    }

}


let authController = new AuthController();

export default authController;