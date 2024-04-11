const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.status(404).send("Something went Wrong");
    //res.send("Hello World !");
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})