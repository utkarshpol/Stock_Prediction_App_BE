import express from 'express'
import mongoose from 'mongoose'
import watchlist from './routes/frontendRoutes/updateWatchlist.js'
import usercreation from './routes/frontendRoutes/createUser.js'
import cors from "cors"
import { NseIndia } from 'stock-nse-india'
import getList from './routes/frontendRoutes/getStocks.js'

const app = express();
app.use(express.json());
app.use(cors());
 
mongoose.connect("mongodb://localhost:27017/Stock-Prediction").then(()=>{
    console.log("Database connected successfully")
}).catch((err)=>{
    console.log("some error occored", err);
})

app.use(watchlist);
app.use(usercreation);
app.use(getList)

app.listen(3000, '0.0.0.0', ()=>{
    console.log(`Backend connected to ${3000}`);
})