import mongoose from "mongoose";

const singleNews = new mongoose.Schema({
    heading: String,
    body: String,
});

const newsSchema = new mongoose.Schema({
    topNews: [singleNews],
})

const hotNews = new mongoose.model('news',newsSchema);

export default hotNews;