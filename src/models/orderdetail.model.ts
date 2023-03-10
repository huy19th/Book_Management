import { Schema, model } from "mongoose";
import Book from "./book.model";

const orderDetailSchema = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        required: [true, `This product doesn't belong to any order`],
        ref: 'Order'
    },
    book: {
        type: Schema.Types.ObjectId ,
        required: [true, `There is no book in this order detail`],
        ref: 'Book'
    },
    quantity: {
        type: Number,
        required: [true, `Please include quantity`],
        min: [0, `1 is the minimum number of products you can buy`]
    }
})

const OrderDetail = model('OrderDetail', orderDetailSchema);

export default OrderDetail;