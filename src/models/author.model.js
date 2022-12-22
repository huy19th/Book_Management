"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please include author's name"]
    },
    biography: String,
    image: String
});
var Author = (0, mongoose_1.model)('Author', authorSchema);
exports["default"] = Author;
