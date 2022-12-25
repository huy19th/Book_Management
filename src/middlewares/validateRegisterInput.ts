import User from '../models/user.model'

const validateRegisterInput = async (req, res, next) => {
    let error = {};
    if (!req.body.email) {
        error['email'] = `Email cannot be blank`;
    }
    else {
        let user = await User.findOne({email: req.body.email});
        if (user) error['email'] = `Email is already used`;
    }
    if (!req.body.password || req.body.password < 6) error['password'] = `Password must have at least 6 characters`;
    if (!req.body.name) error['name'] = `Name cannot be blank`;
    if (!req.body.phone) error['phone'] = `Phone cannot be blank`;
    if (!req.body.address) error['address'] = `Address cannot be blank`;


    if (Object.keys(error).length) {
        let backURL = req.header('Referer');
        req.flash('error', error);
        req.flash('info', req.body);
        res.redirect(backURL);
    }
    else {
        next();
    }
}

export default validateRegisterInput;