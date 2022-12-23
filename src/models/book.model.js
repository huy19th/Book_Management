"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var category_model_1 = require("./category.model");
var author_model_1 = require("./author.model");
var publisher_model_1 = require("./publisher.model");
var bookSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please include book name']
    },
    category: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: category_model_1["default"],
        required: [true, 'Please select at least 1 category']
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: author_model_1["default"],
        required: [true, 'Please include an author']
    },
    publisher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: publisher_model_1["default"]
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
var Book = (0, mongoose_1.model)('Book', bookSchema);
exports["default"] = Book;
