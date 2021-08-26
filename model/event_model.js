const mongoos=require("mongoose")
const schema=mongoos.Schema;
const event_Schema=new schema({
    Time:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },
    location:{
        type:String
    }},{timestamps:true})
    const event_Model=mongoos.model("event_Model",event_Schema)
    module.exports=event_Model;