import { Schema, model } from "mongoose";
import Category from './category.model';
import Author from './author.model';
import Publisher from './publisher.model';

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please include book name']
    },
    category: {
        type: [Schema.Types.ObjectId],
        ref: Category,
        required: [true, 'Please select at least 1 category']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: Author,
        required: [true, 'Please include an author']
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: Publisher
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

})

const Book = model('Book', bookSchema);

export default Book;