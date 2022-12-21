"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank'],
        minLength: [6, 'Password must contain at least 6 characters']
    },
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    phone: {
        type: String,
        required: [true, 'Phone cannot be blank'],
        minLength: [10, 'Phone number must have 10 numbers'],
        maxLength: [10, 'Phone number must have 10 numbers']
    },
    address: {
        type: String,
        required: [true, 'Address cannot be blank']
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map