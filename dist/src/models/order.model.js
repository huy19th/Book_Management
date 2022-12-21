"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    orderDate: Date,
    deliverDate: Date,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'User undefined'],
        ref: 'User'
    },
    totalMoney: Number
});
const Order = (0, mongoose_1.model)('Order', orderSchema);
exports.default = Order;
//# sourceMappingURL=order.model.js.map