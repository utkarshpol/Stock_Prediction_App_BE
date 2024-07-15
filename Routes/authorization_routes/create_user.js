import express from 'express'
import User from '../../Schema/userSchema.js'
import bcrypt from 'bcryptjs'

const router = express.Router();

router.post('/api/create-user',async (req,res)=>{
    const emailId = req.body.emailId;
    const password = req.body.password;
    try{
        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const newUser = new User({
            username: emailId.split('@')[0],
            password: hashPass,
            emailId: emailId,
        })
        const savedUser = await newUser.save();
        res.status(200).json({message: "User created successfully"});
    } catch(err){
        res.status(500).json({message: "some unexpected backend error"});
        console.log(err);
    }
})

export default router;