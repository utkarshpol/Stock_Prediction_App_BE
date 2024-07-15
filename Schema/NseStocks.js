import mongoose from 'mongoose'

const stockSchema = new mongoose.Schema({
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

const nseStocks = mongoose.model('NSE', stockSchema);

export default nseStocks;