import fs from 'fs';
import Book from "../../models/book.model";
import Author from "../../models/author.model";
import Publisher from "../../models/publisher.model";
import Category from "../../models/category.model";
import multer from 'multer';
import lodash from 'lodash';

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
            let page = +req.params.page || 1;
            const categories = await Category.find({})
            const numberOfBooks = await Book.aggregate([
                {$count: "total"}
                ]
            );
            let sum = numberOfBooks[0].total;
            let arr = [];
            let perPage = 6;
            let end = Math.ceil(sum / perPage);
            for (let i = 1; i <= end; i++) {
                arr.push(i)
            }
            let newArr = lodash.chunk(arr, 3);
            console.log(newArr)
            for (let i = 0; i < newArr.length; i++) {
                for (let j = 0; j < newArr[i].length; j++) {
                    if (page === newArr[i][j]) {
                        let begin = (page - 1) * perPage;
                        const books = await Book.find().populate({path: "author", select: "name"}).populate({path: "publisher", select: "name"}).populate({path: "category"}).limit(perPage).skip(begin);
                        res.render('admin/book/list', {books: books, way: newArr[i], page: page, end: end, categories: categories});
                    }
                }
            }
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
            });
            if (book) {
                await book.remove();
                res.redirect('back');
            }
            else {
                res.render("error");
            }
        } catch (err) {
            res.render("error");
        }
    }

    async search(req, res) {
        let keyword = req.query.keyword;
        let category = req.query.category;
        let price = req.query.price;
        console.log(keyword)
        console.log(category)
        console.log(price)
        let categoryId = await Category.findOne({name: category});
        let query = {};
        if (keyword && keyword !== '') {
            query = {
                name: {$regex: keyword, $options: 'i'},
            }
        }
        if (category !== 'Thể loại') {
            query = {
                ...query,
                category: {$in: [categoryId._id]}
            }
        }
        if (price !== 'Mức giá') {
            if (price === '200000+') {
                price = price.toString().split('+');
                let min = price[0]
                query = {
                    ...query,
                    price: {$gt: min}
                }
            } else {
                price = price.toString().split('-')
                let min = price[0];
                let max = price[1];
                query = {
                    ...query,
                    price: {$gt: min, $lte: max}
                }
            }
        }
        const allBooks = await Book.find(query).populate({path: "author", select: "name"}).populate({path: "publisher", select: "name"}).populate({path: "category"});
        let sum = allBooks.length;
        console.log(sum)
        if (sum !== 0) {
            let arr = [];
            let perPage = 6;
            let end = Math.ceil(sum / perPage);
            for (let i = 1; i <= end; i++) {
                arr.push(i)
            }
            let newArr = lodash.chunk(arr, 3);
            console.log(newArr)
            console.log(9)
            for (let i = 0; i < newArr.length; i++) {
                for (let j = 0; j < newArr[i].length; j++) {
                    if (+req.query.page === newArr[i][j]) {
                        let page = req.query.page;
                        let begin = (+page - 1) * perPage;
                        const books = await Book.find(query).populate({path: "author", select: "name"}).populate({path: "publisher", select: "name"}).populate({path: "category"}).limit(perPage).skip(begin);
                        console.log(books);
                        console.log(newArr[i]);
                        console.log(page);
                        console.log(end)
                        res.status(200).json({
                            sum: sum,
                            books: books,
                            way: newArr[i],
                            page: page,
                            end: end
                        });
                    }
                }
            }
        } else {
            res.status(200).json({
                sum: sum
            });
        }
    }
}

let bookController = new BookController();

export default bookController;