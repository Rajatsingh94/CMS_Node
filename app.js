
const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const home = require('./routes/home/main');
const admin = require('./routes/admin/main');
const posts = require('./routes/admin/posts');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cms').then((db)=>{
    console.log('Mongo connected');
}).catch(error => console.log(error));


//joining with public folder to access
app.use(express.static(path.join(__dirname,'public')));

//view engine
app.engine('hbs',exphbs({defaultLayout: 'main.hbs'}));
app.set('view engine','hbs');

//routes

app.use('/', home);
app.use('/admin',admin);
app.use('/admin/posts', posts);

//port listening
app.listen(3000,()=>{
    console.log('Listening on Port 3000...');
});

