import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isVerified: Boolean,
    googleAuth: Boolean
});

const user = new mongoose.model("Users",userSchema);

export default user;