import express from 'express'
import user from '../../Schemas/UserSchema.js'
import bcrypt from 'bcryptjs'
import userWatchlists from '../../Schemas/WatchlistSchema.js';

const router = express.Router();

router.post("/api/signup",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password)
    try{
        const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        // creating a new user 
        const newUser = new user({
            usrname: email.split('@')[0],
            password: hash,
            email: email,
            isVerified: false,
            googleAuth: false
        });

        // creating a watchlists for that user
        const newWatchlist = new userWatchlists({
            email: email,
            watchlists: []
        });

        // saving it in database
        await newWatchlist.save();
        await newUser.save();

        // giving a response
        res.status(200).json({message: "User created successfully"});
    } catch(err){
        res.status(500).json({message: "some error occored"});
        console.log(err);
    }
})

export default router;