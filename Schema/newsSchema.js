import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    heading: {type: String, required: true},
    body: {type: String, required: true},
})

const News = mongoose.model('News', newsSchema);