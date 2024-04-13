const express = require('express');
const app = express();
app.use(express.json());

let books = [
    {id:1, title:'Book-1', author:'Author-1'},
    {id:2, title:'Book-2', author:'Author-2'}
]

//GET Method
app.get('/books',(req,res) => {
    res.json(books);
})

//POST Method
app.post('/books',(req,res) => {
    console.log(req.body);

    const newBook = req.body;
    newBook.id = books.length+1;
    books.push(newBook);
    res.status(201).json(books);    
})

//PUT Method - works on data updation
app.put('/books/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;

    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({error:'Book not Found'});
    }
})

//DELETE Method - to delete particular data
app.delete('/books/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        const deletedBook = books[index];
        books.splice(index,1);
        res.json(deletedBook);
    }
    else{
        res.status(404).json({error:'Book not Found'});
    }
})

app.listen(3000, () => {
    console.log("Server is running on Port:3000");
})