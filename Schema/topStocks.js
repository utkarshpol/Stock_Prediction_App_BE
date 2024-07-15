import mongoose from 'mongoose'

const topStocksSchema = new mongoose.Schema({
    stockName: {type: String, required: true},
    stockSymbol: {type: String, required: true},
    currPrice: {type: Number, required: true},
    predictedPrice1: {type: Number, required: true},
    predictedPrice2: {type: Number, required: true},
    predictedPrice3: {type: Number, required: true},
    predictedPrice4: {type: Number, required: true},
    predictedPrice5: {type: Number, required: true},
    predictedPrice6: {type: Number, required: true},
    predictedPrice7: {type: Number, required: true},
})

const topStocks = mongoose.model('NSE', topStocksSchema);

export default topStocks;