import express from 'express';
import adminBookRouter from './src/routers/admin/book.router';
import adminOrderRouter from './src/routers/admin/order.router';
import authRouter from './src/routers/auth.router';
import profileRouter from './src/routers/profile.router';
import registerRouter from './src/routers/register.router';
import cookieParser from 'cookie-parser';
import checkAuthentication from './src/middlewares/checkAuthentication';
import database from './src/configs/database';
import session from 'express-session';
import flash from 'connect-flash';
const bodyParser = require('body-parser');
import path from 'path'
import userRouter from './src/routers/user/dashboard.router'
import userProductRouter from './src/routers/user/product.router';
import Order from "./src/models/order.model";
import Book from "./src/models/book.model";
import Category from "./src/models/category.model";
import lodash from 'lodash'
import cartRouter from './src/routers/user/cart.router'

const PORT = 3000;
const app = express();

const cors = require('cors');
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));
database.connect();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
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

app.use('/profile', profileRouter)
app.use('/user', userRouter);
app.use('/user',cartRouter);
app.use('/user', userProductRouter);
app.use('/admin/book', adminBookRouter);
app.use('/admin/order', adminOrderRouter);
app.get('/admin/dashboard', async (req, res) => {
    const years = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}}},
        {$group: {_id: "$year"}},
        {$sort: {_id: 1}}])
    res.render('admin/dashboard', {years: years})
});

// Viết api

// Reveneu

app.get('/admin/reveneu/thisyear', async (req, res) => {
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year}},
        {$group: {_id: "$year", total : { "$sum" : "$totalMoney" }}}
    ])
    res.status(200).json(data);
})

app.get('/admin/reveneu/thismonth', async (req, res) => {
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {month: +month, year: +year}},
        {$group: {_id: "$month", total : { "$sum" : "$totalMoney" }}}])
    res.status(200).json(data);
})

app.get('/admin/reveneu/today', async (req, res) => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date, month: +month, year: +year}},
        {$group: {_id: "$date", total : { "$sum" : "$totalMoney" }}}
    ])
    res.status(200).json(data);
})

// Order

app.get('/admin/orders/thisyear', async (req, res) => {
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year}},
        {$count: "total"}
    ])
    const dataLastYear = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year-1}},
        {$count: "total"}
    ])
    if (dataCurrent[0].total > dataLastYear[0].total) {
        let number = (+dataCurrent[0].total - +dataLastYear[0].total)/(+dataLastYear[0].total)*100;
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'increase'
        });
    }
    if (dataCurrent[0].total < dataLastYear[0].total) {
        let number = Math.abs((+dataCurrent[0].total - +dataLastYear[0].total)/(+dataLastYear[0].total)*100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'decrease'
        });
    }
    if (dataCurrent[0].total === dataLastYear[0].total) {
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            message: 'equal'
        });
    }
})

app.get('/admin/orders/thismonth', async (req, res) => {
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {month: +month, year: +year}},
        {$count: "total"}
    ])
    const dataLastMonth = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {month: +month-1, year: +year}},
        {$count: "total"}
    ])
    if (dataCurrent[0].total > dataLastMonth[0].total) {
        let number = (+dataCurrent[0].total - +dataLastMonth[0].total)/(+dataLastMonth[0].total)*100;
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'increase'
        });
    }
    if (dataCurrent[0].total < dataLastMonth[0].total) {
        let number = Math.abs((+dataCurrent[0].total - +dataLastMonth[0].total)/(+dataLastMonth[0].total)*100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'decrease'
        });
    }
    if (dataCurrent[0].total === dataLastMonth[0].total) {
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            message: 'equal'
        });
    }
})

app.get('/admin/orders/today', async (req, res) => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date, month: +month, year: +year}},
        {$count: "total"}
    ])
    res.status(200).json(data);
})

// Customers

app.get('/admin/customers/thisyear', async (req, res) => {
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {user: 1, year: {$year: "$orderDate"}}},
        {$match: {year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    res.status(200).json(data);
})

app.get('/admin/customers/thismonth', async (req, res) => {
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {user: 1, month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {month: +month, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    res.status(200).json(data);
})

app.get('/admin/customers/today', async (req, res) => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const data = await Order.aggregate([
        {$project: {user: 1, date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {date: +date, month: +month, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    res.status(200).json(data);
})

// Charts

app.get('/admin/reports/chart', async (req, res) => {
    let year = req.query.year;
    const reveneuData = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year}},
        {$group: {_id: "$month", total : { "$sum" : "$totalMoney" }}},
        {$sort: {_id: 1}}
    ])
    console.log(reveneuData)
    const ordersData = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {year: +year}},
        {$group: {_id: "$month", total : { "$sum" : 1 }}},
        {$sort: {_id: 1}}
    ])
    const customersData = await Order.aggregate([
        {$project: {user: 1, month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {year: +year}},
        {$group: {_id: {month: "$month", userId: "$user"}}},
        {$group: {_id: "$_id.month", total : { "$sum" : 1 }}},
        {$sort: {_id: 1}}
    ])
    res.status(200).json({
        ordersData: ordersData,
        reveneuData: reveneuData,
        customersData: customersData
    })
})

// Search

app.get('/admin/book/search/filter', async (req, res) => {
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
})

app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})


















