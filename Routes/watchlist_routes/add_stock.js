import express from 'express';
import stockList from '../../Schema/stocklistSchema.js';
import nseStocks from '../../Schema/NseStocks.js';
import authMiddleware from '../../middleware/auth.js';
import Watchlist from '../../Schema/watchlistSchema.js';

const router = express.Router();

router.put('/api/add-stock', authMiddleware, async (req, res) => {
    try {
        console.log(req.userId)
        const { watchlistId, stockId } = req.body;
        
        const stockToAdd = await nseStocks.findById(stockId);
        if (!stockToAdd) return res.status(404).json({ message: "Stock not found" });
        const findWatchlist = await Watchlist.findById({_id: watchlistId});
        if(!findWatchlist) return res.status(404).json({message: "watchlist not found"});
        const alreadyPresent = await stockList.findOne({watchlistId: watchlistId, stockId: stockId});
        if(alreadyPresent) return res.status(400).json({message: "stock already present in watchlist"});
        const {stockName,stockSymbol,predictedPrice1,predictedPrice2
            ,predictedPrice3,predictedPrice4,predictedPrice5,predictedPrice6,
            predictedPrice7} = stockToAdd;

        const newStock = new stockList({watchlistId,stockId,stockName,stockSymbol,
            predictedPrice1,predictedPrice2,predictedPrice3,
            predictedPrice4,predictedPrice5,predictedPrice6,predictedPrice7
        });

        await newStock.save();
        return res.status(200).json({ message: "Stock added successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Some unexpected error occurred" });
    }
});

export default router;
