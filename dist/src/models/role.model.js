"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: ['admin', 'user']
    }
});
const Role = (0, mongoose_1.model)('Role', roleSchema);
exports.default = Role;
//# sourceMappingURL=role.model.js.map