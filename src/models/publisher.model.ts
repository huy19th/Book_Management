import { Schema, model } from "mongoose";

const publisherSchema = new Schema({
    name: {
        type: String,
        required: [true, `Please include publisher's name`]
    },
    info: String,
    logo: String
})

const Publisher = model('Publisher', publisherSchema);

export default Publisher;