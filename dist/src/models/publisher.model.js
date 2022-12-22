"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const publisherSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, `Please include publisher's name`]
    },
    info: String,
    logo: String
});
const Publisher = (0, mongoose_1.model)('publisher', publisherSchema);
exports.default = Publisher;
//# sourceMappingURL=publisher.model.js.map