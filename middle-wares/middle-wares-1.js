const express = require('express');
const app = express();

const logger = (req,res,next) => {
    console.log(`${new Date()} , Request[${req.method}], [${req.url}]`);
    next();
}

const authorize = (req,res,next) => {
    console.log("I am middleware 2");
    next();
}

app.use([authorize,logger]); //compiles first

//for particulat URL
//app.use('/contact',logger)

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