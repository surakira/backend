const mongoose=require('mongoose');
const Schima=mongoose.Schema;
const organSchima=new Schima({
   donetion_id:{
       type:String , 
       unique:true
   } ,
   
   donetion_name:{
      type:String
      
  },
  donetion_amount:{ 
     type:String
  },
  donetion_discription:{ 
    type:String
  },
  
},{timestamps:true})
const organModel=mongoose.model('organModel',organSchima);
module.exports=organModel; 