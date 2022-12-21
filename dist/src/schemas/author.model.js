"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: String
});
const Author = (0, mongoose_1.model)('Author', authorSchema);
exports.Author = Author;
//# sourceMappingURL=author.model.js.map