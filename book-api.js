const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('records, from express');
});

//app.listen(port, () => console.log(`records app listening on port ${port}!`))


// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/books/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(books);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.listen(port, () => console.log(`records app listening on port ${port}!`));