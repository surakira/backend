const mongoose = require("mongoose");
const event_Model=require('./event_model')
const charity_Model=require('./charity_model');
const appoint_Model=require('./appointment_Model');
const schema=mongoose.Schema;
const donerSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    email:{
       type:String,
       required:true,
       
     },
     phone_no:{
         type:String,
         required:true,
     }, 
     password:{
         type:String,
         required:true,
     }, 
     charity_Id:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'charity_Model',
     },
     event:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'event_Model',
     },
      appointment:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'appoint_Model',
      }
},{timestamps:true});
const doner_Model=mongoose.model('doner_Model',donerSchema)
module.exports=doner_Model