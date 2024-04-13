const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>");
})

//normal route
app.get('/contact',(req,res) => {
    res.send("<h1>Inside Contact Page</h1>");
})

//files route
app.get('/files',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

//JSON route
app.get('/jsonres',(req,res) => {
    res.json([{
        firstName: 'Thomas',
        lastName: 'Shelby'
    },{
        firstName: 'Arthur',
        lastName: 'Shelby'
    }])
})


//non existing routes
app.all('*',(req,res) => { //* means all the non existing pafes
    res.send('Not Found');
})


app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})