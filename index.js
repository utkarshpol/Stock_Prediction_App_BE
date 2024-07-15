import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import addStock from './Routes/watchlist_routes/add_stock.js'
import addWatchlist from './Routes/watchlist_routes/add_watchlist.js'
import deleteStock from './Routes/watchlist_routes/delete_stock.js'
import deleteWatchlist from './Routes/watchlist_routes/delete_watchlist.js'
import getWatchlists from './Routes/watchlist_routes/get_user_watchlis.js'
import createUser from './Routes/authorization_routes/create_user.js'
import loginUser from './Routes/authorization_routes/login_user.js'
import getAllStocks from './Routes/get_all_stocks.js'

dotenv.config()

const PORT = process.env.PORT; 

mongoose.connect('mongodb://localhost:27017/Stock-Prediction').then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log("error while connecting database");
});

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(addStock);
app.use(addWatchlist);
app.use(deleteStock); 
app.use(deleteWatchlist);
app.use(getWatchlists); 
app.use(createUser);
app.use(loginUser);
app.use(getAllStocks);

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Backend is listning on http://localhost:${PORT}`);
});