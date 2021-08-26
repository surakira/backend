const express=require('express');
const mongoose=require('mongoose');
const morgan=require("morgan");
const bodyparser=require('body-parser');
const organPostRouter=require('./routes/organPostRoute')
const organ_auth_route=require('./routes/organ_auth')
mongoose.connect('mongodb://localhost:27017/sura',{useNewUrlParser:true,useUnifiedTopology:true});
 const db=mongoose.connection;
 db.on('error',(err)=>{
     console.log(err);
 })
 db.once('open',()=>{
     console.log("the connection correctly estambleshd");

 })
 const app=express();
 app.get('/',(req,res)=>{
     res.send("this is the voice of surafel");
 })
 //app.use('/uploads',express.static('uploads'))
 app.use(morgan('dev'));
 app.use(bodyparser.urlencoded({extended:true}))
 app.use(bodyparser.json());
const PORT=process.env.PORT||3000;
app.listen(PORT);
app.use('/api/organPost',organPostRouter);
app.use('/api',organ_auth_route)