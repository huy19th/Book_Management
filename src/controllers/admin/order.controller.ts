import User from "../../models/user.model";
import Order from "../../models/order.model";
import OrderDetail from "../../models/orderdetail.model";
import mongoose from "mongoose";
import Category from "../../models/category.model";
import Book from "../../models/book.model";
import lodash from 'lodash'

class OrderController {
    async showOrderList(req, res) {
        const orders = await Order.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetail"
                }
            }, {
                $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
            },
            {
                $project: {
                    email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                    totalMoney: 1
                }
            },
            {$sort: {order_Date: -1}}
        ])
        let sum = orders.length;
        let arr = [];
        let perPage = 10;
        let end = Math.ceil(sum / perPage);
        for (let i = 1; i <= end; i++) {
            arr.push(i)
        }
        let newArr = lodash.chunk(arr, 3);
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (+req.params.page === newArr[i][j]) {
                    let page = req.params.page;
                    let begin = (+page - 1) * perPage;
                    const orders = await Order.aggregate([
                        {
                            $lookup: {
                                from: "users",
                                localField: "user",
                                foreignField: "_id",
                                as: "userDetail"
                            }
                        }, {
                            $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
                        },
                        {
                            $project: {
                                email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                                deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                                totalMoney: 1
                            }
                        },
                        {$sort: {order_Date: -1}},
                        {$skip: +begin}, {$limit: +perPage}
                    ])
                    res.render('admin/order/list', {orders: orders, way: newArr[i], page: page, end: end});
                }
            }
        }
    }

    async showOrderDetail(req, res) {
        let orderId = req.params.id;
        let order = await Order.findOne({_id: orderId});
        let user = await User.findOne({_id: order.user});
        order['dateOrder'] = order.orderDate ? order.orderDate.toLocaleDateString() : '';
        order['dateDeliver'] = order.deliverDate ? order.deliverDate.toLocaleDateString() : '';

        const orderDetail = await OrderDetail.aggregate([
            {$lookup: {
                    from: "books",
                    localField: "book",
                    foreignField: "_id",
                    as: "bookDetail"
                }}, {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$bookDetail", 0 ] }, "$$ROOT" ] } }
            },
            {$lookup: {
                    from: "orders",
                    localField: "order",
                    foreignField: "_id",
                    as: "Order"
                }}, {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$Order", 0 ] }, "$$ROOT" ] } }
            }, {$lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "User"
                }}, {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$User", 0 ] }, "$$ROOT" ] } }
            }, {$project: {_id: 0, order: 1, email: 1, orderDate: {$dateToString: {format: "%d-%m-%Y", date: "$orderDate"}}, deliverDate: {$dateToString: {format: "%d-%m-%Y", date: "$deliverDate"}},book: 1, name: 1, quantity: 1, price: 1, image: 1}}, {
                $match: {order: new mongoose.Types.ObjectId(orderId)}
            }
        ])
        order['detail'] = orderDetail;
        res.render('admin/order/detail', {order: order, user: user});
    }

    async showOrdersOnDelivery(req, res) {
        const orders = await Order.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetail"
                }
            }, {
                $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
            },
            {
                $project: {
                    email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                    totalMoney: 1
                }
            }, {$match: {deliver_Date: null}},
            {$sort: {order_Date: -1}}
        ])
        let sum = orders.length;
        let arr = [];
        let perPage = 10;
        let end = Math.ceil(sum / perPage);
        for (let i = 1; i <= end; i++) {
            arr.push(i)
        }
        let newArr = lodash.chunk(arr, 3);
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (+req.params.page === newArr[i][j]) {
                    let page = req.params.page;
                    let begin = (+page - 1) * perPage;
                    const orders = await Order.aggregate([
                        {
                            $lookup: {
                                from: "users",
                                localField: "user",
                                foreignField: "_id",
                                as: "userDetail"
                            }
                        }, {
                            $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
                        },
                        {
                            $project: {
                                email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                                deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                                totalMoney: 1
                            }
                        }, {$match: {deliver_Date: null}}, {$skip: +begin}, {$limit: +perPage},
                        {$sort: {order_Date: -1}}
                    ])
                    res.render('admin/order/onDelivery', {orders: orders, way: newArr[i], page: page, end: end});
                }
            }
        }
    }

    async showOrdersCompleted(req, res) {
        const orders = await Order.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetail"
                }
            }, {
                $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
            },
            {
                $project: {
                    email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                    totalMoney: 1
                }
            }, {$match: {order_Date: {$ne: null}}},
            {$sort: {order_Date: -1}}
        ])
        let sum = orders.length;
        let arr = [];
        let perPage = 10;
        let end = Math.ceil(sum / perPage);
        for (let i = 1; i <= end; i++) {
            arr.push(i)
        }
        let newArr = lodash.chunk(arr, 3);
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (+req.params.page === newArr[i][j]) {
                    let page = req.params.page;
                    let begin = (+page - 1) * perPage;
                    const orders = await Order.aggregate([
                        {
                            $lookup: {
                                from: "users",
                                localField: "user",
                                foreignField: "_id",
                                as: "userDetail"
                            }
                        }, {
                            $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
                        },
                        {
                            $project: {
                                email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                                deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                                totalMoney: 1
                            }
                        }, {$match: {order_Date: {$ne: null}}}, {$skip: +begin}, {$limit: +perPage},
                        {$sort: {order_Date: -1}}
                    ])
                    res.render('admin/order/completed', {orders: orders, way: newArr[i], page: page, end: end});
                }
            }
        }
    }

    // async delete(req, res) {
    //     let ids = req.query.ids;
    //     console.log(ids);
    //     await Order.deleteMany({_id: {$in: ids}});
    //     res.status(200).json({
    //         message: 'Success!'
    //     })
    // }

    async search(req, res) {
        let email = req.query.email;
        let date = req.query.date;
        let query = {};
        if (email && email !== '') {
            query = {
                email: {$regex: email, $options: 'i'},
            }
        }
        if (date) {
            query = {
                ...query,
                order_Date: date
            }
        }
        const orders = await Order.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetail"
                }
            }, {
                $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
            },
            {
                $project: {
                    email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                    totalMoney: 1
                }
            }, {$match: query},
            {$sort: {order_Date: -1}}
        ])
        let sum = orders.length;
        if (sum !== 0) {
            let arr = [];
            let perPage = 6;
            let end = Math.ceil(sum / perPage);
            for (let i = 1; i <= end; i++) {
                arr.push(i)
            }
            let newArr = lodash.chunk(arr, 3);
            for (let i = 0; i < newArr.length; i++) {
                for (let j = 0; j < newArr[i].length; j++) {
                    if (+req.query.page === newArr[i][j]) {
                        let page = req.query.page;
                        let begin = (+page - 1) * perPage;
                        const orders = await Order.aggregate([
                            {
                                $lookup: {
                                    from: "users",
                                    localField: "user",
                                    foreignField: "_id",
                                    as: "userDetail"
                                }
                            }, {
                                $replaceRoot: {newRoot: {$mergeObjects: [{$arrayElemAt: ["$userDetail", 0]}, "$$ROOT"]}}
                            },
                            {
                                $project: {
                                    email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                                    totalMoney: 1
                                }
                            }, {$match: query}, {$skip: +begin}, {$limit: +perPage},
                            {$sort: {order_Date: -1}}
                        ])
                        console.log(orders)
                        res.status(200).json({
                            sum: sum,
                            orders: orders,
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

let orderController = new OrderController;
export default orderController;