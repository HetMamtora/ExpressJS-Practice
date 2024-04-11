const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname),'example','index.html')
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})