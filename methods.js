const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false})); //For POST request

let books = [
    {id:1, title:'Book-1', author:'Author-1'},
    {id:2, title:'Book-2', author:'Author-2'}
]

//GET Method
app.get('/books',(req,res) => {
    res.json(books);
});

//POST Method
app.post('/books',(req,res) => {
    const newBook = {
        id: books.length+1,
        title: req.body.title,
        author: req.body.author
    }

    books.push(newBook);
    res.status(201).json(books);
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})