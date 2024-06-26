import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: String,
    symbol: String,
    industry: String,
    
});

const stockData = new mongoose.model('stocks', companySchema);

export default stockData;