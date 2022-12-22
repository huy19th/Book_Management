import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please include category name']
    },
    description: {
        type: String
    }
})

const Category = model('category', categorySchema);

export default Category;