const express = require('express');
const router =express.Router();
const Post = require('../../models/Post');

router.all('/*',(req, res, next)=>{
    req.app.locals.layout ='admin.hbs';
    next();
})

router.get('/post',(req,res)=>{
    Post.find({}).then(posts =>{
        res.render('admin/dashboard',{posts: posts});

    });
    
})

router.get('/', (req,res)=>{

    res.render('admin/index');
})

router.post('/',(req,res)=>{
   
    let file = req.files.file;
    let filename = file.name;

    let allowComments= true;
        
    file.mv('./public/uploads/'+ filename,(err)=>{
        if(err) throw err;
    });

   if(req.body.allowComments)
   {
       allowComments= true;
   }
   else
   {
       allowComments= false;
   }

   const newPosts = Post({
    title:req.body.title,
    status: req.body.status,
    allowComments: allowComments,
    body: req.body.body

   }); 

   newPosts.save().then(savedPost=>{
       res.redirect('/admin/posts');
       console.log('data added');
   }).catch(err => console.log(err));

   console.log(req.body);
    
})

module.exports= router;