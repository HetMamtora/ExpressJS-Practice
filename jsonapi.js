const express = require('express');
const app = express();
const phones = require('./data');

app.get('/',(req,res) => {
    //res.json(phones)

    res.send('<h1>Home Page</h1> <a href="api/phones">Phones</a>')
})

// JSON-API
/*app.get('/api/phones',(req,res) => {
    //res.json(phones);

    const newItem = phones.map((product) => {
        const {id,name,image} = product;
        return{id,name,image};
    })
    res.json(newItem);
})*/

//USING PARAMS
app.get('/api/phones/:phoneID',(req,res) => {
    const{phoneID} = req.params;
    const singleProduct = phones.find((product) => product.id === Number(phoneID));

    if(!singleProduct){
        res.status(404).send("Product Not Found");
    }

    res.json(singleProduct);
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})