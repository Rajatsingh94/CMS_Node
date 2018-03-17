const express = require('express');
const router =express.Router();


router.get('/', (req,res)=>{

    res.render('home/index');
})

//about
router.get('/about',(req, res)=>{

    res.render('home/about');
})

//login
router.get('/login',(req, res)=>{
    res.render('home/login');
})

//register
router.get('/register',(req,res)=>{
    res.render('home/register');
})



module.exports= router;