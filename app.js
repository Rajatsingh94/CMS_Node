
const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const main = require('./routes/home/main');

//joining with public folder to access
app.use(express.static(path.join(__dirname,'public')));

//view engine
app.engine('hbs',exphbs({defaultLayout: 'main.hbs'}));
app.set('view engine','hbs');

//routes

app.use('/', main);

//port listening
app.listen(3000,()=>{
    console.log('Listening on Port 3000...');
});

