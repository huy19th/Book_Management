"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please include book name']
    },
    category: [{
            type: [mongoose_1.Schema.Types.ObjectId],
            ref: 'category',
            required: [true, 'Please select at least 1 category']
        }],
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'author',
        required: [true, 'Please include an author']
    },
    publisher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'publisher',
    },
    description: String,
    image: String,
    quantity: {
        type: Number,
        required: [true, 'Please include quantity']
    },
    price: {
        type: Number,
        required: [true, 'Please include price']
    }
});
const Book = (0, mongoose_1.model)('Book', bookSchema);
exports.default = Book;
//# sourceMappingURL=book.model.js.map