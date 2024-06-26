import mongoose from "mongoose";

const watchlist_Items = new mongoose.Schema({
    name: { type: String, required: true },
    currPrice: { type: Number, required: true },
    targetDays: { type: Number, required: true },
    targetPrice: { type: Number, required: true }
});
const Watchlist_Schema = new mongoose.Schema({
    email: String,
    watchlists: [[watchlist_Items]]
});

const userWatchlists = mongoose.model("userWatchlists", Watchlist_Schema);

export default userWatchlists;