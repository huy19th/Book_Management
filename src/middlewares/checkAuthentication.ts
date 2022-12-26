import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const key = 'Knowledge is Power';

const checkAuthentication = (req, res, next) => {
    let cookie = req.cookies;
    if (!cookie.token) return res.redirect('/login');
    let token = cookie.token;
    jwt.verify(token, key, async (err, decoded) => {
        if (err) {
           return res.redirect('/login');
        }
        let user = await User.findOne({_id: decoded._id});
        if (!user) {
            return res.redirect('/login');
        }
        req.decoded = decoded;
        next();
    })
}

export default checkAuthentication;