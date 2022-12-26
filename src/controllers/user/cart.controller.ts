import User from "../../models/user.model";
import Order from "../../models/order.model";
import OrderDetail from "../../models/orderdetail.model";

class CartController {
    async getCart(req, res) {
        const user = await User.findOne({_id: req.decoded._id}).exec();
        let cart = await Order.findOne({user: user._id, onCart: true}).exec();
        if (!cart) {
            cart = new Order({user: user._id, onCart: true});
            await cart.save();
        }
        const detail = await OrderDetail.find({order: cart._id}).populate('book').exec();
        let total = detail.reduce((sum, value) => {
            sum += value.quantity * (value as any).book.price || 0;
            return sum;
        }, 0);
        res.render('user/book/cart', {detail, total});

    }

    async addToCart(req, res) {
        console.log({req: req.body});
        const user = await User.findOne({_id: req.decoded._id}).exec();
        let cart = await Order.findOne({user: user._id, onCart: true}).exec();
        if (!cart) {
            cart = new Order({user: user._id, onCart: true});
            await cart.save();
        }
        let bookID = req.body.bookID || 0;
        const quantity = req.body.quantity || 1;
        let detail = await OrderDetail.findOne({order: cart._id, book : bookID});
        if (!detail) {
            detail = new OrderDetail({order: cart._id, book : bookID,quantity:0});
            await detail.save();
        }
        detail.quantity += quantity;
        if(detail.quantity<=0){
             await OrderDetail.deleteOne({_id : detail._id});
        } else {
            await detail.save();
        }
        return res.redirect('/user/getCart');
    }
}

export default CartController;