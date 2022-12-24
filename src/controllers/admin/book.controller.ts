import fs from 'fs';
import Book from "../../models/book.model";
import Author from "../../models/author.model";
import Publisher from "../../models/publisher.model";
import Category from "../../models/category.model";
import multer from 'multer';

const upload = multer();

class BookController {
    async showFormAddBook(req, res) {
        let error = req.flash('error')[0] || {};
        let book = req.flash('book')[0] || {};
        let categories = await Category.aggregate([
            { $sort: { name: 1 } }
        ]);
        res.render("admin/book/add", { categories: categories, error: error, book: book });
    }
    async saveBook(req, res, next) {
        try {
            let authorName = req.body.author;
            let author = await Author.findOne({ name: authorName });
            if (!author) {
                author = new Author({ name: authorName });
                await author.save();
            }

            let publisherName = req.body.publisher;
            let publisher = await Publisher.findOne({ name: publisherName });
            if (!publisher) {
                publisher = new Publisher({ name: publisherName });
                await publisher.save();
            }

            let id = req.params.id || '';

            let book;
            if (id) {
                book = await Book.findOne({ _id: id });
            }
            else {
                book = new Book({})
            }

            book.name = req.body.name;
            book.author = author._id;
            book.publisher = publisher._id;
            book.quantity = req.body.quantity;
            book.price = req.body.price;
            book.description = req.body.description;
            book.category = req.body.category;

            if (req.file) {
                if (book.image) fs.unlink(`./public/${book.image}`, err => {
                    if (err) console.log(err);
                });
                book.image = `/sharing/img/book/${req.file.filename}`
            }

            await book.save();

            res.redirect("/admin/book");
        }
        catch (err) {
            next(err);
        }
    }
    async showList(req, res) {
        try {
            const books = await Book.find().populate({ path: "author", select: "name" }).populate({ path: "publisher", select: "name" });
            res.render("admin/book/list", { books: books });
        } catch {
            res.render("error");
        }
    }
    async showBookDetail(req, res, next) {
        try {
            const book = await Book.findOne({ _id: req.params.id })
                .populate({ path: 'author', select: 'name' })
                .populate({ path: 'publisher', select: 'name' })
                .populate({ path: 'category', select: 'name' });

            let error = req.flash('error')[0] || {};
            let categories = await Category.aggregate([
                { $sort: { name: 1 } }
            ]);
            if (book) {
                res.render("admin/book/detail", { book: book, categories: categories, error: error });
            }
            else {
                res.render("error");
            }
        }
        catch (err) {
            next(err);
        }
    }
    async updateBook(req, res) {
        try {
            console.log(req.body);
            const book = await Book.findOne({ _id: req.params.id });
            book.name = req.body.name;
            book.description = req.body.description;
            let authorName = req.body.author;
            let publisherName = req.body.publisher;

            let author = await Author.findOne({ name: authorName });
            if (!author) {
                author = new Author({ name: authorName });
                await author.save();
            }
            book.author = author._id;

            let publisher = await Publisher.findOne({ name: publisherName });
            if (!publisher) {
                publisher = new Publisher({ name: publisherName });
                await publisher.save();
            }
            book.publisher = publisher._id;

            if (req.file) {
                if (book.image) fs.unlink(`./public/${book.image}`, err => {
                    if (err) console.log(err);
                });
                book.image = `/sharing/img/book/${req.file.filename}`
            }

            await book.save();
            if (book) {
                res.redirect('/admin/book');
            } else {
                res.render('error');
            }
        } catch (err) {
            res.end(err);
        }
    }
    async deleteBook(req, res) {
        try {
            const book = await Book.findOne({ _id: req.params.id });
            if (book.image) fs.unlink(`./public/${book.image}`, err => {
                if (err) console.log(err);
            })
            await book.remove();
            res.redirect('/admin/book');
        } catch (err) {
            res.render("error");
        }
    }
}

let bookController = new BookController();

export default bookController;