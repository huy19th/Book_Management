import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
        required: [true, `Please include author's name`]
    },
    biography: String,
    image: String
})

const Author = model('Author', authorSchema);

export default Author;