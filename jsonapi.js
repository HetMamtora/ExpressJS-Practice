const express = require('express');
const app = express();
const phones = require('./data');

app.get('/',(req,res) => {
    //res.json(phones)

    res.send('<h1>Home Page</h1> <a href="api/phones">Phones</a>')
})

app.get('/api/phones',(req,res) => {
    //res.json(phones);

    const newItem = phones.map((product) => {
        const {id,name,image} = product;
        return{id,name,image};
    })
    res.json(newItem);
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})