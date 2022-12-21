import User from '../models/user.model';
import bcrypt from 'bcrypt';

const Salt = 10;

class RegisterController {
    showFormRegister(req, res) {
        let array = req.flash('error');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message
            }
        })
        res.render('register', { error: error });
    }
    async register(req, res) {
        try {
            let user = new User(req.body);
            bcrypt.hash(user.password, Salt, async (err, hash) => {
                if (err) throw err;
                user.password = hash;
                await user.save();
                req.flash('message', 'Register Successed!')
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

export default registerController;