"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
    orderDate: Date,
    deliverDate: Date,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'User undefined'],
        ref: 'User'
    },
    totalMoney: Number
});
var Order = (0, mongoose_1.model)('Order', orderSchema);
exports["default"] = Order;
