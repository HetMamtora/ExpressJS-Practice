const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/',(req,res) => {
    res.send('Home');
})

app.get('/about',(req,res) => {
    res.send('About');
})

app.get('/contact',(req,res) => {
    res.send('Contact');
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})