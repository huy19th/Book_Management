import fs from 'fs';
import Book from "../../models/book.model";
import multer from 'multer';
import Author from '../../models/author.model';

const upload = multer();

class BookController {
    showFormAddBook(req, res) {
        res.render("book/create");
    }
    async addBook(req, res) {
        try {
            const authorNew = new Author({name: req.body.author});
            const bookNew = new Book({
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
            } else {
                res.render("error");
            }
        } catch (err) {
            res.render("error");
        }
    }
    async showList(req, res) {
        try {
            const books = await Book.find().populate({
                path: "author", select: "name"
            });
            res.render("book/list", { books: books});
        } catch {
            res.render("error");
        }
    }
    async showBookDetail(req, res) {
        try {
            const book = await Book.findOne({ _id: req.params.id }).populate({ path: 'author', select: 'name' });
            console.log(book, 'book')
            if (book) {
                res.render("book/detail", { book: book })
            } else {
                res.render("error");
            }
        } catch (err) {
            res.render("error");
        }
    }
    async updateBook(req, res) {
        try {
            const book = await Book.findOne({ _id: req.params.id });
            book.name = req.body.name;
            book.description = req.body.description;
            let authorName = req.body.author;

            let author = await Author.findOne({ name: authorName });
            if (!author) {
                author = new Author({ name: authorName });
                await author.save();
            }
            book.author = author._id;

            if (req.file) {
                if (book.image) fs.unlink(`./src/public/${book.image}`, err => {
                    if (err) console.log(err);
                });
                book.image = `/img/book/${req.file.filename}`
            }

            await book.save();
            if (book) {
                res.redirect("/book");
            } else {
                res.render("error");
            }
        } catch (err) {
            res.render("error");
        }
    }
    async deleteBook(req, res) {
        try {
            const book = await Book.findOne({ _id: req.params.id });
            if (book) {
                await book.remove();
                res.redirect('/book');
            }
            else {
                res.render("error");
            }
        } catch (err) {
            res.render("error");
        }
    }
}

let bookController = new BookController();

export default bookController;