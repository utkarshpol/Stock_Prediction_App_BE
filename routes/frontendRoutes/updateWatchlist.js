import express from 'express'
import userWatchlists from '../../Schemas/WatchlistSchema.js'

const router = express.Router();

router.get("/api/:email/get-watchlist", async (req, res) => {
    console.log("user Arrived");
    const email = req.params.email;
    try {
        // Find the user's watchlist based on the email
        const watchlist = await userWatchlists.findOne({ email: email });

        // If found, respond with the watchlist object
        res.status(200).json({ watchlist: watchlist.watchlists });
    } catch (err) {
        console.error('Error fetching watchlist:', err);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

router.post("/api/:email/update-watchlist", async (req, res) => {
    const email = req.params.email;
    try {
        // Find the user's watchlist based on the email
        const watchlist = await userWatchlists.findOne({ email: email });

        // Update the watchlists array with the new data from req.body.watchlist
        watchlist.watchlists = req.body.watchlist;

        // Save the updated watchlist to the database
        await watchlist.save();

        // return the response
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error updating watchlist:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

export default router;