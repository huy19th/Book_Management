import User from '../models/user.model';
import bcrypt from 'bcrypt';

const salt = 10;

class ProfileController {
    async showInfo(req, res) {
        let array = req.flash('error');
        let message = req.flash('message');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message
            }
        })
        let link = req.decoded.role == 'admin' ? '/admin/dashboard' : '/user/dashboard';
        let user = await User.findOne({_id: req.decoded._id});
        res.render('sharing/userInfo', {user: user, error: error, message: message, link: link});
    }
    async saveInfo(req, res) {
        let user = await User.findOne({_id: req.decoded._id});
        let {email, name, phone, address} = req.body;
        user.name = name;
        user.phone = phone;
        user.address = address;

        try {
            await user.save();
            req.flash('message', 'Saved Successfully!');
        }
        catch (err) {
            req.flash('error', err.errors);
        }
        finally {
            res.redirect('/profile');
        }
    }
    async showFormChangePassword(req, res) {
        let message = req.flash('message');
        let error = req.flash('error');
        let link = req.decoded.role == 'admin' ? '/admin/dashboard' : '/user/dashboard';
        res.render('sharing/changePassword', {message: message, error: error, link: link});
    }
    async confirmCurrentPassword(req, res) {
        let user = await User.findOne({_id: req.decoded._id});
        let currentPassword = req.params.currentPassword;
        console.log(currentPassword)
        bcrypt.compare(currentPassword, user.password, (err, result) => {
            if (err) throw err;
            if (result) {
                res.json(true);
            }
            else res.json(false);
    })}
    async savePassword(req, res) {
        let user = await User.findOne({_id: req.decoded._id});
        try {
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
            user.password = hash;
            await user.save();
            req.flash('message', 'Changed password succesfully')
            res.redirect('/profile/change-password');
        });
        }
        catch (err) {
            req.flash('error', err.errors);
        }
    }
    logout(req, res) {
        res.clearCookie('token');
        res.redirect('/login');
    }
}

let profileController = new ProfileController();

export default profileController;