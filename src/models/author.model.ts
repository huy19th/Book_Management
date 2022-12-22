import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, `Please include author's name`]
    },
    biography: String,
    image: String
})

const Author = model('author', authorSchema);

export default Author;