import express from 'express';
import stockList from '../../Schema/stocklistSchema.js';
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();

router.delete('/api/delete-stock', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;  // Retrieved from authMiddleware
        const watchlistId = req.body.watchlistId;
        const stockId = req.body.stockId;
        const deleteStock = await stockList.findOne({watchlistId: watchlistId, stockId: stockId});
        if (!deleteStock) return res.status(404).json({ message: "Stock not found in watchlist" });
        await stockList.findOneAndDelete({watchlistId: watchlistId, stockId: stockId})
        return res.status(200).json({ message: "Stock deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Some unexpected error occurred" });
    }
});

export default router;