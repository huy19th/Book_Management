"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const book_model_1 = __importDefault(require("../models/book.model"));
const multer_1 = __importDefault(require("multer"));
const author_model_1 = __importDefault(require("../models/author.model"));
const upload = (0, multer_1.default)();
class BookController {
    showFormAddBook(req, res) {
        res.render("book/create");
    }
    async addBook(req, res) {
        console.log(req.file);
        try {
            const authorNew = new author_model_1.default({ name: req.body.author });
            const bookNew = new book_model_1.default({
                title: req.body.title,
                description: req.body.description,
                author: authorNew,
            });
            bookNew.image = req.file ? `/img/book/${req.file.filename}` : '';
            const p1 = authorNew.save();
            const p2 = bookNew.save();
            let [author, book] = await Promise.all([p1, p2]);
            if (book) {
                res.redirect("/book");
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
    async showList(req, res) {
        try {
            const books = await book_model_1.default.find().populate({
                path: "author", select: "name"
            });
            res.render("book/list", { books: books });
        }
        catch (_a) {
            res.render("error");
        }
    }
    async showBookDetail(req, res) {
        try {
            const book = await book_model_1.default.findOne({ _id: req.params.id }).populate({ path: 'author', select: 'name' });
            console.log(book, 'book');
            if (book) {
                res.render("book/detail", { book: book });
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
    async updateBook(req, res) {
        try {
            const book = await book_model_1.default.findOne({ _id: req.params.id });
            book.name = req.body.name;
            book.description = req.body.description;
            let authorName = req.body.author;
            let author = await author_model_1.default.findOne({ name: authorName });
            if (!author) {
                author = new author_model_1.default({ name: authorName });
                await author.save();
            }
            book.author = author._id;
            if (req.file) {
                if (book.image)
                    fs_1.default.unlink(`./src/public/${book.image}`, err => {
                        if (err)
                            console.log(err);
                    });
                book.image = `/img/book/${req.file.filename}`;
            }
            await book.save();
            if (book) {
                res.redirect("/book");
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
    async deleteBook(req, res) {
        try {
            const book = await book_model_1.default.findOne({ _id: req.params.id });
            if (book) {
                await book.remove();
                res.redirect('/book');
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            res.render("error");
        }
    }
}
let bookController = new BookController();
exports.default = bookController;
//# sourceMappingURL=book.controller.js.map