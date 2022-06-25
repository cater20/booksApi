
const loadbooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/books", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for (let book of books) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

                        <div>Author: ${book.author}</div>
                        <div>Publisher: ${book.publisher}</div>
                        <div>Number Of Pages: ${book.numOfPages}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadbooks();


app.get('/books/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of book) {
        if (book.isbn === isbn) {
            res.json(books);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/books/:isbn', (req, res) => {
     //Reading isbn from the URL
   const isbn = req.params.isbn;

    //g Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('books is deleted');
});

app.post('/books/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
   }

    res.send('book is edited');
});
//const setEditModal = (isbn) => {
    // Get information about the book using isbn
  //  const xhttp = new XMLHttpRequest();

    //xhttp.open("GET", `http://localhost:3000/books/${isbn}`, false);
    //xhttp.send();

    //const book = JSON.parse(xhttp.responseText);

    //const {
      //  title,
        //author,
        //publisher,
        //publish_date,
        //numOfPages
   // } = books;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('publish_date').value = publish_date;
    document.getElementById('numOfPages').value = numOfPages;

       // Setting up the action url for the book
       document.getElementById('editForm').action = `http://localhost:3000/books/${isbn}`;
    