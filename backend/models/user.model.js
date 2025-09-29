import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required : true
    },

    email : {
        type:String,
        required : true,
        unique:true
    },

    password :
    {
        type : String,

    },

    mobile :{
        type : String,
        requires:true,
    },

    role:{
        type:String,
        enum : ["user","owner",deliveryBoy],
        require:true
    }


},{timestamps:true})


const User = mongoose.model("User",userSchema)

export default User
