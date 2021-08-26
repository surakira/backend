const mongoose=require("mongoose");
const schema=mongoose.Schema;
const appoint_Schema=new schema({
    Time:{
        type:Date,
        default:Date.now()
    },
    Type:{
        type:String
    },
   
},{timestamps:true})
const appoint_Model=mongoose.model("appoint_Model",appoint_Schema)
module.exports=appoint_Model;