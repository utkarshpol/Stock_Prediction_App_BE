import express from 'express';
import Watchlist from '../../Schema/watchlistSchema.js';
import stockList from '../../Schema/stocklistSchema.js';
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();

router.get('/api/get-watchlist', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId; // Retrieved from authMiddleware
        const rawWatchlists = await Watchlist.find({ userId: userId });
        const stocks = {};
        const watchlists = [];
        for (const watchlist of rawWatchlists) {
            const watchlistId = watchlist._id;
            watchlists.push({id: watchlistId});
            const allStocksInWatchlist = await stockList.find({ watchlistId: watchlistId });
            const modifiedStocks = allStocksInWatchlist.map(stock => {
                return {
                    id: stock.stockId,name: stock.stockName,symbol: stock.stockSymbol,currentPrice: stock.currPrice,
                    predictedPrice: [stock.predictedPrice1,stock.predictedPrice2,stock.predictedPrice3,
                     stock.predictedPrice4,stock.predictedPrice5,stock.predictedPrice6,
                     stock.predictedPrice7]
                };
            });
            stocks[watchlistId] = modifiedStocks;
        }
        return res.status(200).json({ watchlists: watchlists, stocks: stocks, message: "success" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Some unexpected error occurred" });
    }
});

export default router;