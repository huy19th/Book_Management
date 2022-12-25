import User from "src/models/user.model";
import Order from "../../models/order.model";
import OrderDetail from "../../models/orderdetail.model";
import mongoose from "mongoose";

class OrderController {
    async showOrderList(req, res) {
        let orders = await Order.aggregate([
            {$lookup: {
                from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "userDetail"
                }}, {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$userDetail", 0 ] }, "$$ROOT" ] } }
            },
            {$project: {email: 1, order_Date: {$dateToString: {format: "%Y-%m-%d", date: "$orderDate"}},
                    deliver_Date: {$dateToString: {format: "%Y-%m-%d", date: "$deliverDate"}},
                    totalMoney: 1
                }},
            {$sort: {order_Date: -1}}    
        ])
        res.render('admin/order/list', { orders: orders });
    }
    async showOrderDetail(req, res) {
        let orderId = req.params.id;
        let order = await Order.findOne({_id: orderId});
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
            }, {$project: {_id: 0, order: 1, email: 1, orderDate: {$dateToString: {format: "%d-%m-%Y", date: "$orderDate"}}, deliverDate: {$dateToString: {format: "%d-%m-%Y", date: "$deliverDate"}}, name: 1, quantity: 1, price: 1}}, {
            $match: {order: new mongoose.Types.ObjectId(orderId)}
            }
        ])
        let books = []
        orderDetail.forEach(item => {
            let book = {
                name: item.name,
                quantity: item.quantity,
                price: item.price
            };
            books.push(book);
        })
        order['books'] = books;
        console.log(order)
        res.render('admin/order/detail', {order: order});
    }

}

let orderController = new OrderController;
export default orderController;