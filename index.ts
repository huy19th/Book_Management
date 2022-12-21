import express from 'express';
import adminBookRouter from './src/routers/admin/book.router';
import authRouter from './src/routers/auth.router';
import registerRouter from './src/routers/register.router';
import cookieParser from 'cookie-parser';
import checkAuthentication from './src/middlewares/checkAuthentication';
import database from './src/configs/database';
import session from 'express-session';
import flash from 'connect-flash';

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./src/public'))

database.connect();

app.use(cookieParser());
app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use('/login', authRouter);
app.use('/register', registerRouter);

app.use(checkAuthentication);
app.use('/admin/book', adminBookRouter);
app.get('/admin/dashboard', (req, res) => {res.render('dashboard')})

app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})