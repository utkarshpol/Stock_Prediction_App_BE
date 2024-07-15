import express from 'express'
import nseStocks from '../Schema/NseStocks.js'
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/api/all-stocks', authMiddleware, async (req,res)=>{
    try {
        const fullList = await nseStocks.find({});
        const modifiedList = fullList.map(stock => {

            return {
                id: stock._id, name: stock.stockName, symbol: stock.stockSymbol,
                predictedPrice: [stock.predictedPrice1,stock.predictedPrice2,stock.predictedPrice3,
                    stock.predictedPrice4,stock.predictedPrice5,stock.predictedPrice6,stock.predictedPrice7
                ]
            }
        })
        return res.status(200).json({stock_list: modifiedList, message: "success"});
    } catch(err){
        console.log(err);
        return res.status(500).json({message: "some unexpected error occored"});
    }
})

export default router;