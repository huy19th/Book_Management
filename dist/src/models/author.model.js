"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, `Please include author's name`]
    },
    biography: String,
    image: String
});
const Author = (0, mongoose_1.model)('author', authorSchema);
exports.default = Author;
//# sourceMappingURL=author.model.js.map