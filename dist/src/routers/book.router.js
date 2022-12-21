"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const checkAuthorization_1 = __importDefault(require("../middlewares/checkAuthorization"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/img/book');
    },
    filename: function (req, file, cb) {
        let reg = /png|jpg|jpeg|svg/;
        let type = file.mimetype.match(reg);
        let filename = `${file.fieldname}-${Date.now()}.${type}`;
        cb(null, filename);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const router = (0, express_1.Router)();
router.get('/add', checkAuthorization_1.default, book_controller_1.default.showFormAddBook);
router.post('/add', upload.single('image'), book_controller_1.default.addBook);
router.get('/', book_controller_1.default.showList);
router.post('/update/:id', upload.single('image'), book_controller_1.default.updateBook);
router.get('/detail/:id', book_controller_1.default.showBookDetail);
router.get('/delete/:id', book_controller_1.default.deleteBook);
exports.default = router;
//# sourceMappingURL=book.router.js.map