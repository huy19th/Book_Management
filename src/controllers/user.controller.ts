import User from '../models/user.model';

class UserController {
    async showInfo(req, res) {
        let array = req.flash('error');
        let message = req.flash('message');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message
            }
        })
        let user = await User.findOne({_id: req.decoded._id});
        res.render('sharing/userInfo', {user: user, error: error, message: message});
    }
    async saveInfo(req, res) {
        console.log(req.body);
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
            res.redirect('/user/change-info');
        }
    }
    showFormConfirmOldPassword(req, res) {
    }
    showFormChangePassword(req, res) {
    }
    async savePassword(req, res) {
    }
    logout(req, res) {

    }
}

let userController = new UserController();

export default userController;