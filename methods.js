const express = require('express');
const app = express();

app.use(express.static('public'));

let books = [
    {id:1, title:'Book-1', author:'Author-1'},
    {id:2, title:'Book-2', author:'Author-2'}
]

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})