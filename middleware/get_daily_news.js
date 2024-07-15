import cron from 'node-cron';

const getDailyNews = () => {
    // Logic to fetch news
    console.log('Fetching news');
};

// Cron job to run at 4 AM every day
cron.schedule('0 4 * * *', getDailyNews);

export default function(req, res, next) {
    next();
}
