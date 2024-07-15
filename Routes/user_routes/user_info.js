import express from 'express'
import User from '../../Schema/userSchema.js'
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();

router.get('/api/get-info', authMiddleware, async (req,res)=>{
    try {
        const userId = req.userId;
        console.log(userId);
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({message: "no user found"});
        return res.status(200).json({username: user.username, emailId: user.emailId, message: "success"});
    } catch(err){
        console.log(err);
        return res.status(500).json({message: "some unexpected error occored"});
    }
})

export default router;