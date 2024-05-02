import express from "express";
import fs from "fs";
import dotenv from 'dotenv'
dotenv.config()
const app = express();


app.use((req,res,next)=>{
  next()
})
app.use(express.json())
const books = [
  {
    id: 1,
    title: "Sariq Devni Minib",
    author: "Xudoyberdi To'xtaboyev",
    year: 2013
  },
  {
    id: 2,
    title: "Diqqat",
    author: "Kel Newport",
    year: 2018
  },
  {
    id: 3,
    title: "Atom Odam",
    author: "Newport",
    year: 2015
  }
];

function saveBooks() {
  fs.writeFileSync('books.json', JSON.stringify(books), 'utf8');
}

function loadBooks() {
  const data = fs.readFileSync('books.json', 'utf8');
  return JSON.parse(data);
}
app.get('/books', (req, res) => {
  const books = loadBooks();
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const book = loadBooks().find(book => book.id === parseInt(bookId));

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Kitob topilmadi' });
  }
});


app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  saveBooks();
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === parseInt(bookId));

  if (index !== -1) {
    books[index] = updatedBook;
    saveBooks();
    res.json(updatedBook);
  } else {
    res.status(404).json({ error: 'Kitob topilmadi' });
  }
});

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex(book => book.id === parseInt(bookId));

  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    saveBooks();
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: 'Kitob topilmadi' });
  }
});
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} portida ishga tushdi`);
});