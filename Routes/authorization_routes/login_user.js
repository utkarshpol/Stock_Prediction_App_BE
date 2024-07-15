import express from 'express'
import User from '../../Schema/userSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const router = express.Router();

router.post('/api/login',async (req,res)=>{
    const emailId = req.body.emailId;
    const password = req.body.password;
    try {
        const existingUser = await User.findOne({emailId: emailId});
        if(existingUser){
            const match = await bcrypt.compare(password, existingUser.password);
            if(match){
                const token = jwt.sign({userId: existingUser._id},process.env.SECRET_KEY, {expiresIn: '10000h'});
                res.cookie('token', token, {httpOnly: true, maxAge: 10*365*24*60*60*1000});
                return res.status(200).json({cookie: token, message: "Login Successful"});
            }
            return res.status(400).json({message: "incorrect password"});
        } 
        return res.status(404).json({message: "User not found"});
    } catch(err){
        console.log(err);
        return res.status(500).json({message: "some unexpected error occored"});
    }
})

export default router;