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
import {resolve} from "./public/admin/vendor/chart.js/helpers";

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
    const dataCurrent = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year}},
        {$group: {_id: "$year", total : { "$sum" : "$totalMoney" }}}
    ])
    const dataLastYear = await Order.aggregate([
        {$project: {year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {year: +year-1}},
        {$group: {_id: "$year", total : { "$sum" : "$totalMoney" }}}
    ])
    if (dataCurrent[0].total > dataLastYear[0].total) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastYear[0].total)/(+dataLastYear[0].total)*100)-100).toFixed(2);
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

app.get('/admin/reveneu/thismonth', async (req, res) => {
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {month: +month, year: +year}},
        {$group: {_id: "$month", total : { "$sum" : "$totalMoney" }}}])
    const dataLastMonth = await Order.aggregate([
        {$project: {month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {month: +month-1, year: +year}},
        {$group: {_id: "$month", total : { "$sum" : "$totalMoney" }}}])
    if (dataCurrent[0].total > dataLastMonth[0].total) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastMonth[0].total)/(+dataLastMonth[0].total)*100)-100).toFixed(2);
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

app.get('/admin/reveneu/today', async (req, res) => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date, month: +month, year: +year}},
        {$group: {_id: "$date", total : { "$sum" : "$totalMoney" }}}
    ])
    const dataYesterDay = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date, month: +month, year: +year}},
        {$group: {_id: "$date", total : { "$sum" : "$totalMoney" }}}
    ])
    if (dataCurrent.length > dataYesterDay.length) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataYesterDay[0].total)/(+dataYesterDay[0].total)*100)-100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'increase'
        });
    }
    if (dataCurrent.length < dataYesterDay.length) {
        let number = Math.abs((+dataCurrent[0].total - +dataYesterDay[0].total)/(+dataYesterDay[0].total)*100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'decrease'
        });
    }
    if (dataCurrent.length === dataYesterDay.length) {
        res.status(200).json({
            dataCurrent: 0,
            message: 'equal'
        });
    }
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
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastYear[0].total)/(+dataLastYear[0].total)*100)-100).toFixed(2);
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
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastMonth[0].total)/(+dataLastMonth[0].total)*100)-100).toFixed(2);
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
    const dataCurrent = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date, month: +month, year: +year}},
        {$count: "total"}
    ])
    const dataYesterday = await Order.aggregate([
        {$project: {date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}, totalMoney: 1}},
        {$match: {date: +date-1, month: +month, year: +year}},
        {$count: "total"}
    ]);
    if (dataCurrent.length > dataYesterday.length) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataYesterday[0].total)/(+dataYesterday[0].total)*100)-100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'increase'
        });
    }
    if (dataCurrent.length < dataYesterday.length) {
        let number = Math.abs((+dataCurrent[0].total - +dataYesterday[0].total)/(+dataYesterday[0].total)*100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'decrease'
        });
    }
    if (dataCurrent.length === dataYesterday.length) {
        res.status(200).json({
            dataCurrent: 0,
            message: 'equal'
        });
    }
})

// Customers

app.get('/admin/customers/thisyear', async (req, res) => {
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {user: 1, year: {$year: "$orderDate"}}},
        {$match: {year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    const dataLastYear = await Order.aggregate([
        {$project: {user: 1, year: {$year: "$orderDate"}}},
        {$match: {year: +year-1}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    if (dataCurrent[0].total > dataLastYear[0].total) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastYear[0].total)/(+dataLastYear[0].total)*100)-100).toFixed(2);
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

app.get('/admin/customers/thismonth', async (req, res) => {
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {user: 1, month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {month: +month, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    const dataLastMonth = await Order.aggregate([
        {$project: {user: 1, month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {month: +month-1, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    if (dataCurrent[0].total > dataLastMonth[0].total) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataLastMonth[0].total)/(+dataLastMonth[0].total)*100)-100).toFixed(2);
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

app.get('/admin/customers/today', async (req, res) => {
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    const dataCurrent = await Order.aggregate([
        {$project: {user: 1, date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {date: +date, month: +month, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    const dataYesterday = await Order.aggregate([
        {$project: {user: 1, date: {$dayOfMonth: "$orderDate"} , month: {$month: "$orderDate"}, year: {$year: "$orderDate"}}},
        {$match: {date: +date-1, month: +month, year: +year}},
        {$group: {_id: "$user"}},
        {$count: "total"}
    ])
    if (dataCurrent.length > dataYesterday.length) {
        let number = (+Math.abs((+dataCurrent[0].total - +dataYesterday[0].total)/(+dataYesterday[0].total)*100)-100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'increase'
        });
    }
    if (dataCurrent.length < dataYesterday.length) {
        let number = Math.abs((+dataCurrent[0].total - +dataYesterday[0].total)/(+dataYesterday[0].total)*100).toFixed(2);
        res.status(200).json({
            dataCurrent: dataCurrent[0].total,
            number: number,
            message: 'decrease'
        });
    }
    if (dataCurrent.length === dataYesterday.length) {
        res.status(200).json({
            dataCurrent: 0,
            message: 'equal'
        });
    }
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

app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})




















