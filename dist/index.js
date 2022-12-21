"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_router_1 = __importDefault(require("./src/routers/book.router"));
const auth_router_1 = __importDefault(require("./src/routers/auth.router"));
const register_router_1 = __importDefault(require("./src/routers/register.router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const checkAuthentication_1 = __importDefault(require("./src/middlewares/checkAuthentication"));
const database_1 = __importDefault(require("./src/configs/database"));
const express_session_1 = __importDefault(require("express-session"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.static('./src/public'));
database_1.default.connect();
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));
app.use((0, connect_flash_1.default)());
<<<<<<< HEAD
app.use('/login', auth_router_1.default);
app.use('/register', register_router_1.default);
=======
app.use("/login", auth_router_1.default);
app.use("/register", register_router_1.default);
>>>>>>> 4297fc14139cd6d2c6a138122657c908441e7e90
app.use(checkAuthentication_1.default);
app.use('/book', book_router_1.default);
app.get('/dashboard', (req, res) => { res.render('dashboard'); });
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT);
});
//# sourceMappingURL=index.js.map