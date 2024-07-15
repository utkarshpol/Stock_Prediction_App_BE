import express from 'express';
import Watchlist from '../../Schema/watchlistSchema.js';
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();

router.put('/api/add-watchlist', authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;  // Retrieved from authMiddleware
        const newWatchlist = new Watchlist({ userId });
        await newWatchlist.save();
        return res.status(200).json({watchlistId: newWatchlist._id ,message: "Watchlist updated successfully"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Some unexpected error occurred" });
    }
});

export default router;