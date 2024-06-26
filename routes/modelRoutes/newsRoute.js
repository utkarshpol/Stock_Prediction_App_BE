import express from 'express';
import axios from 'axios'; // for flask
import hotNews from '../../Schemas/newsSchema';

const router = express.Router();

let fetchedNews;
setTimeout(async ()=>{
    // get the news with news api


    // make a request to the model and get the top 5-10 news by posting all the news using axios


    // store them in fetchedNews
    // delete the current news from the database
    // store the fetchedNews in the database

}, 24*60*60*1000)

router.get("/api/get-news",async (req,res)=>{
    try{
        const currentNews = await hotNews.findOne({});
        if(currentNews){
            res.status(200).json({news: currentNews})
        }
        else res.status(404).json({success: false, news: []});
    } catch(err){
        console.log(err);
        res.status(500).json({success: false, news: []});
    }
});

export default router;