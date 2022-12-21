import UserModel from '../models/user.model';
import passport from '../middlewares/passport';
import jwt from 'jsonwebtoken';

const key = 'Knowledge is Power';

class AuthController {
    showFormLogIn(req, res) {
        let error = req.flash('error');
        res.render('login', {error: error});
    }
    // authenticate(req, res, next) {
    //     passport.authenticate("local", (err, user) => {
    //         if (err) {
    //             return next(err)
    //         }
    //         if (!user) {
    //             return res.send("Wrong email or password")
    //         }
    //         req.login(user, () => {
    //             res.send("You are authenticated")
    //         })
    //     })(req, res, next)
    // }
    async authenticate (req, res) {
        if (!req.body.email || !req.body.password) {
            req.flash('error', 'Email & password cannot be blank');
            return res.redirect('/login');
        }
        let user = await UserModel.findOne({email: req.body.email, password: req.body.password});
        if (!user) {
            req.flash('error', 'Wrong email or password');
            return res.redirect('/login');
        }
        else {
            let payload = {
                _id: user._id,
                role: user.role
            }
            let token = jwt.sign(payload, key, {expiresIn: '1h'});
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 60* 60 * 1000
            })
            res.redirect(user.role == 'admin'? '/dashboard' : 'book');
        }
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