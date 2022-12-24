import User from "src/models/user.model";
import Order from "../../models/order.model";

class OrderController {
    async showOrderList(req, res) {
        let orders = await Order.find({}).sort({ orderDate: -1 }).populate({
                path: 'user',
                select: 'email',
            })
        res.render('admin/order/list', { orders: orders });
    }

}

let orderController = new OrderController;
export default orderController;