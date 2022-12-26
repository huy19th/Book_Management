import User from '../models/user.model';
import bcrypt from 'bcrypt';

const Salt = 10;

class RegisterController {
    showFormRegister(req, res) {
        let error = req.flash('error')[0] || {};
        let registeredInfo = req.flash('info') || {};
        res.render('sharing/register', { error: error, info: registeredInfo });
    }
    async register(req, res) {
        let user = new User(req.body);
        console.log(req.body);
        bcrypt.hash(user.password, Salt, async (err, hash) => {
            if (err) throw err;
            user.password = hash;
            try {
                await user.save();
                req.flash('message', 'Register Successed!')
                res.redirect('/login');
            }
            catch (err) {
                console.log(err.errors)
                req.flash('error', err.errors);
                res.redirect('/register');
            }
        });
    }
}


let registerController = new RegisterController();

export default registerController;