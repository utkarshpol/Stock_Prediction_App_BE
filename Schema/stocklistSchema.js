import mongoose from "mongoose";

const stocklistSchema = new mongoose.Schema({
    watchlistId: {type: mongoose.Schema.Types.ObjectId, required: true},
    stockId: {type: mongoose.Schema.Types.ObjectId, required: true},
    stockName: {type: String, required: true},
    stockSymbol: {type: String, required: true},
    predictedPrice1: {type: Number, required: true},
    predictedPrice2: {type: Number, required: true},
    predictedPrice3: {type: Number, required: true},
    predictedPrice4: {type: Number, required: true},
    predictedPrice5: {type: Number, required: true},
    predictedPrice6: {type: Number, required: true},
    predictedPrice7: {type: Number, required: true},
})

const stockList = mongoose.model('Stock-List', stocklistSchema);

export default stockList;