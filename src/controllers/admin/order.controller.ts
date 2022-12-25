import User from "src/models/user.model";
import Order from "../../models/order.model";
import OrderDetail from "../../models/orderdetail.model";

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
        let id = req.params.id;
        let orders = await OrderDetail.aggregate([
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
            }, {$project: {_id: 0, order: 1, email: 1, orderDate: {$dateToString: {format: "%d-%m-%Y", date: "$orderDate"}}, deliverDate: {$dateToString: {format: "%d-%m-%Y", date: "$deliverDate"}}, name: 1, quantity: 1, price: 1}}
        ])
        console.log(orders)
        res.end();
    }

}

let orderController = new OrderController;
export default orderController;