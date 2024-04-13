const express = require('express');
const app = express();
const phones = require('./data');

app.get('/',(req,res) => {
    res.send('<h1>Home Page</h1> <a href="api/phones">Phones</a>')
})

app.get('/api/v1/query',(req,res) => {
    //console.log(req.query);

    let sortedPhones = [...phones];
    const {search,limit} = req.query;

    if(search){
        sortedPhones = sortedPhones.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    res.json(sortedPhones);
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})