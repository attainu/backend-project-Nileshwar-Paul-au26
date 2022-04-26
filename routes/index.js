const express= require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('login',{
        layouts:'login'
    })
})

router.get('/dashboard',(req,res)=>{
    res.render("dashboard",{
        layouts:'main'
    })
})

module.exports = {router}