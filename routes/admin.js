const express=require('express');
const router=express.Router()//used for routing
router.get('/home',(req,res)=>{
    res.send(" admin home")
})

router.get('/login',(req,res)=>{
    res.send(" admin login")
})

module.exports=router;