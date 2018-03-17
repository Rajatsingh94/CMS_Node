const express = require('express');
const router =express.Router();

router.all('/*',(req, res, next)=>{
    req.app.locals.layout ='main.hbs';
    next();
})


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