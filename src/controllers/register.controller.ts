import User from '../models/user.model';
import jwt from 'jsonwebtoken';

const key = 'Knowledge is Power';

class RegisterController {
    showFormRegister(req, res) {
        let array = req.flash('error');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message
            }
        })
        res.render('register', {error: error});
    }
    async register (req, res) {
        try {
            let user = new User(req.body);
            await user.save();
            req.flash('message', 'Register Successed!')
            res.redirect('/login');
        }
        catch (err) {
            req.flash('error', err.errors);
            res.redirect('/register');
        }
    }
}


let registerController = new RegisterController();

export default registerController;