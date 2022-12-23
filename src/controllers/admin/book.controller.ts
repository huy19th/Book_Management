import fs from 'fs';
import Book from "../../models/book.model";
import Author from "../../models/author.model";
import Publisher from "../../models/publisher.model";
import Category from "../../models/category.model";
import multer from 'multer';

const upload = multer();

class BookController {
    async showFormAddBook(req, res) {
        let array = req.flash('error');
        let error = {};
        array.forEach(item => {
            for (let field in item) {
                error[field] = item[field].message
            }
        });
        let book = req.flash('book')[0];
        console.log(book);
        let categories = await Category.aggregate([
            {$sort: {name : 1}}
        ]);
        res.render("admin/book/add", {categories: categories, error: error, book: book});
    }
    async addBook(req, res) {
        try {
            let authorName = req.body.author;
            let author = await Author.findOne({name: authorName});
            if (!author) {
                author = new Author({name: authorName});
                await author.save();
            }

            let publisherName = req.body.publisher;
            let publisher = await Publisher.findOne({name: publisherName});
            if (!publisher) {
                publisher = new Publisher({name: publisherName});
                await publisher.save();
            }

            const bookNew = new Book({
                name: req.body.name,
                author: author._id,
                publisher: publisher._id,
                quantity: req.body.quantity,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category
            });
            bookNew.image = req.file ? `/img/book/${req.file.filename}` : '';
            let book = await bookNew.save();
            if (book) {
                res.redirect("/admin/book");
            } else {
                res.render("error");
            }
        }
        catch (err) {
            req.flash('error', err.errors);
            req.flash('book', req.body);
            res.redirect('/admin/book/add');
        }
    }
    async showList(req, res) {
        try {
            const books = await Book.find().populate({path: "author", select: "name"}).populate({path: "publisher", select: "name"});
            res.render("admin/book/list", { books: books});
        } catch {
            res.render("error");
        }
    }
    async showBookDetail(req, res) {
        try {
            const book = await Book.findOne({ _id: req.params.id }).populate({ path: 'author', select: 'name' });
            console.log(book, 'book')
            if (book) {
                res.render("admin/book/detail", { book: book })
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
            if (book) {
                await book.remove();
                res.redirect('admin/book');
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