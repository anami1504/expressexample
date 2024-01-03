const express=require('express') //express called to use express router
const router=express.Router()//used for routing
router.get('/home',(req,res)=>{
    res.send("home")
})
router.get('/about',(req,res)=>{
    res.send("user about")
})

module.exports=router;