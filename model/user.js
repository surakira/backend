const mongoos= require('mongoose');
const schma=mongoos.Schema;
 const userschema=new schma({
  approv:{
      type:Boolean,
      default:false,
      required:true,
  },  
organ_name:{
       type:String
   },
organ_email:{
      type:String
  },
organ_username:{
      type:String
  },
organ_catagory:{
         type:String
  },
organ_discription:{
    type:String
},
organ_discription:{
    type:String
},

organ_region:{
    type :String
},
organ_wereda:{
    type:String
},
organ_ciy:{
    type:String
},
organ_password:{
    type:String
}

 },{timestamps:true})
 const user=mongoos.model('user',userschema)
 module.exports=user