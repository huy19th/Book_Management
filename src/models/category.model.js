"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please include category name']
    },
    description: {
        type: String
    }
});
var Category = (0, mongoose_1.model)('Category', categorySchema);
exports["default"] = Category;
