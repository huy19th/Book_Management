"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var orderDetailSchema = new mongoose_1.Schema({
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "This product doesn't belong to any order"],
        ref: 'Order'
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "There is no book in this order detail"],
        ref: 'Book'
    },
    quantity: {
        type: Number,
        required: [true, "Please include quantity"],
        min: [0, "1 is the minimum number of products you can buy"]
    }
});
var OrderDetail = (0, mongoose_1.model)('OrderDetail', orderDetailSchema);
exports["default"] = OrderDetail;
