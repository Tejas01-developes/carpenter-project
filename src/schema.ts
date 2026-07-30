import mongoose from "mongoose";

const userschema=new mongoose.Schema({


name:{
    type:String,
   required:true
},

email:{
    type:String,
    unique:true,
    required:true
},

age:{
    type:Number
},
phone:{
    type:String
}



},{timestamps:true})

const user_collection=mongoose.model("users",userschema)
export default user_collection