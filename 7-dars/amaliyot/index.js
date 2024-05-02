import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const books = [
    {
        id: 1,
        name: "Sariq Devni Minib",
        year: 2013,
        author: "Xudoyberdi To'xtaboyev",
        price: 20000
    },
    {
        id: 2,
        name: "Diqqat",
        year: 2018,
        author: "Kel Newport",
        price: 35000
    },
    {
        id: 3,
        name: "Atom Odam",
        year: 2015,
        author: "Newport",
        price: 5000
    },
]
app.use(express.json());

app.get('/', (req, res) => {
    const query = req.query;
    console.log(query);
    if (query) {
        const data = books.find(
            (item) => item.year == query.year && item.name == query.name
        );
    }
    res.status(200).json({
        status: "OK",
        data: books,
    })
});
app.get('/:id', (req, res) => {
    const id = +req.params.id;
    const book = books.find((item) => item.if === id);
    if (!book) {
        return res.status(404).json({
            status: "Not found",
        });
    }
    res.status(200).json({
        status: "OK",
        data: books,
    });
});

app.get('/:id', (req, res) => {
    const id = +req.params.id
    res.status(200).json({
        status: "OK",
        data: books,
        id: bookID
    })
})

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server ${port}-portda ishga tushdi`);
    }
});