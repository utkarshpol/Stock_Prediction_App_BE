import express from 'express';
import Watchlist from '../../Schema/watchlistSchema.js';
import stockList from '../../Schema/stocklistSchema.js';
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();

router.delete('/api/delete-watchlist', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;  // Retrieved from authMiddleware
        const watchlistId = req.body.watchlistId;
        const deleteWatchlist = await Watchlist.findOne({ _id: watchlistId, userId: userId });
        if (!deleteWatchlist) return res.status(404).json({ message: "Watchlist not found" });
        await Watchlist.findByIdAndDelete({ _id: watchlistId, userId: userId });
        await stockList.deleteMany({watchlistId: watchlistId})
        return res.status(200).json({ message: "Watchlist deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Some unexpected error occurred" });
    }
});

export default router;