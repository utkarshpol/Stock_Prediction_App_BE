import express from 'express';
import stockData from '../../Schemas/companiesSchema.js'; // Import your Mongoose model

const router = express.Router();

router.get('/api/get-stocks', async (req, res) => {
  try {
    const companies = await stockData.find({}, 'symbol -_id'); // Query to get only the symbols
    const symbols = companies.map(company => company.symbol); // Extract symbols from the query result

    res.status(200).json({ list: symbols });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching stock symbols' });
  }
});

export default router;

