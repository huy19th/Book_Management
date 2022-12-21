import User from '../models/user.model'

const checkIfEmailExist = async (req, res, next) => {
    let user = await User.findOne({email: req.body.email});
    if (user) {
        req.flash('error', [{email: {message:'Email is already used'}}]);
        res.redirect('/register');
    }
    else {
        next();
    }
}

export default checkIfEmailExist;