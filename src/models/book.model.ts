import { Schema, model } from "mongoose";



// const keywordsSchema = new Schema({
//     keyword: String
// })

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please include book name']
    },
    category: [{
        type: [Schema.Types.ObjectId],
        ref: 'category',
        required: [true, 'Please select at least 1 category']
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author',
        required: [true, 'Please include an author']
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'publisher',

    },
    description: String,
    image: String,
    quantity: {
        type: Number,
        required: [true, 'Please include quantity']
    },
    price: {
        type: Number,
        required: [true, 'Please include price']
    }
    // keywords: [keywordsSchema],
})

const Book = model('Book', bookSchema);

export default Book;