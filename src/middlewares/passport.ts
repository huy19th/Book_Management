import passport from 'passport';
import UserModel from '../models/user.model';
import LocalStrategy from 'passport-local';
import GoogleStrategy from 'passport-google-oauth2'

passport.use('local', new LocalStrategy(async (username, password, cb) => {
    try {
        const user = await UserModel.findOne({ username: username, password: password });
        if (!user) {
            return cb(null, false);
        }
        return cb(null, user);
    }
    catch (err) {
        return cb(err);
    }
}));


passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "757589486009-krtjs58lcfom6m2p4o7rk4vbpbg3ar72.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
},
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile, 'profile')
            let existingUser = await UserModel.findOne({ 'google.id': profile.id });
            // if user exists return the user 
            if (existingUser) {
                return done(null, existingUser);
            }
            // if user does not exist create a new user 
            console.log('Creating new user...');
            const newUser = new UserModel({
                google: {
                    id: profile.id,
                },
                username: profile.emails[0].value,
                password: null
            });
            await newUser.save();
            console.log(newUser, 'newUser')
            return done(null, newUser);
        } catch (error) {
            return done(null, false);
        }
    }
));
export default passport;