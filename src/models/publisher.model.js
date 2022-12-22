"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var publisherSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please include publisher's name"]
    },
    info: String,
    logo: String
});
var Publisher = (0, mongoose_1.model)('Publisher', publisherSchema);
exports["default"] = Publisher;
