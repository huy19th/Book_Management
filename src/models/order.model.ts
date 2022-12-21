import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderDate: Date,
    deliverDate: Date,
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User undefined'],
        ref: 'User'
    },
    totalMoney: Number
})

const Order = model('Order', orderSchema);

export default Order;