"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LOCAL_DB_URL = 'mongodb://localhost:27017/book_test';
const CLOUD_DB_URL = 'mongodb+srv://bluebird:0825@bluebird.dthv7st.mongodb.net/book_management';
let database = {
    connect: () => {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect(LOCAL_DB_URL)
            .then(() => console.log('DB Connected!'))
            .catch(error => console.log('DB connection error:', error.message));
    }
};
exports.default = database;
//# sourceMappingURL=database.js.map