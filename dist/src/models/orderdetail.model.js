"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderDetailSchema = new mongoose_1.Schema({
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, `This product doensn't belong to any order`],
        ref: 'Order'
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, `There is no book in this order detail`],
        ref: 'Book'
    },
    quantity: {
        type: Number,
        required: [true, `Please include quantity`],
        min: [0, `1 is the mininum number of products you can buy`]
    }
});
const OrderDetail = (0, mongoose_1.model)('Order', orderDetailSchema);
exports.default = OrderDetail;
//# sourceMappingURL=orderdetail.model.js.map