const userroute=require('./routes/user.js')
const adminrouter=require('./routes/admin.js')
const express= require("express");
const app= express();
app.listen('3000',()=>{
    console.log("server is running")})
app.set('view engine','ejs') 
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.use('/user',userroute)
app.use('/admin',adminrouter)