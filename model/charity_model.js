const mongoose=require("mongoose");
const schema=mongoose.Schema;
const charity_Schema=new schema({
    Time:{
        type:Date,
        default:Date.now()
    },
    Type:{
        type:String
    },
    Amount:{
        type:Number,
        default:0
    }
},{timestamps:true})
const charity_Model=mongoose.model('charity_Model',charity_Schema)
module.exports=charity_Model;