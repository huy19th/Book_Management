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
        ref: 'Category',
        required: [true, 'Please select at least 1 category']
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: [true, 'Please include an author']
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher',
        required: [true, 'Please include a publisher']
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