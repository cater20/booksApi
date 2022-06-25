const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('records, from express');
});

app.listen(port, () => console.log(`records app listening on port ${port}!`))


// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    
    const book = req.body;

    // Output the book to the console for debugging
    console.log(books);
    books.push(books);

    res.send('Book is added to the database');


    app.get('/books', (req, res) => {
        res.json(books);
    });
});

app.listen(port, () => console.log(`records app listening on port ${port}!`));