const express = require('express');
const router =express.Router();

router.all('/*',(req, res, next)=>{
    req.app.locals.layout ='admin.hbs';
    next();
})

router.get('/', (req,res)=>{

    res.render('admin/index');
})



router.get('/posts',(req,res)=>{
    res.send('It works');
})

module.exports= router;