import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderDate: Date,
    deliverDate: Date,
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User undefined'],
        ref: 'User'
    },
    totalMoney: Number,
    onCart: Boolean
})

const Order = model('Order', orderSchema);

export default Order;