//     mavzuga ham masalalarga ham tushunmadim O'zimcha nimalarnidir yozib
//  kordim u-yoq bu-yoqdan yig'ib aniq ishlaydimi yo'qmi bilmayman lkn ... 



import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/books') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const newBook = JSON.parse(body);
            addBook(newBook, (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                } else {
                    res.statusCode = 201;
                    res.end('Book added successfully');
                }
            });
        });
    } else if (req.method === 'GET' && req.url === '/books') {
        getBooks((err, books) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(books));
            }
        });
    } else if (req.method === 'PUT' && req.url.match(/^\/books\/(\d+)$/)) {
        const bookId = req.url.split('/')[2];
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const updatedBook = JSON.parse(body);
            updateBook(bookId, updatedBook, (err, book) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('Book not found');
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(book));
                }
            });
        });
    } else if (req.method === 'DELETE' && req.url.match(/^\/books\/(\d+)$/)) {
        const bookId = req.url.split('/')[2];
        deleteBook(bookId, (err) => {
            if (err) {
                res.statusCode = 404;
                res.end('Book not found');
            } else {
                res.statusCode = 204;
                res.end('Book deleted successfully');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

function addBook(newBook, callback) {
    getBooks((err, books) => {
        if (err) {
            callback(err);
        } else {
            const bookId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
            const book = { id: bookId, ...newBook };
            books.push(book);
            saveBooks(books, callback);
        }
    });
}

function getBooks(callback) {
    loadBooks((err, books) => {
        if (err) {
            callback(err);
        } else {
            callback(null, books);
        }
    });
}

function updateBook(bookId, updatedBook, callback) {
    getBooks((err, books) => {
        if (err) {
            callback(err);
        } else {
            const index = books.findIndex((book) => book.id === parseInt(bookId));
            if (index === -1) {
                callback(new Error('Book not found'));
            } else {
                const book = { id: parseInt(bookId), ...updatedBook };
                books[index] = book;
                saveBooks(books, (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, book);
                    }
                });
            }
        }
    });
}

function deleteBook(bookId, callback) {
    getBooks((err, books) => {
        if (err) {
            callback(err);
        } else {
            const index = books.findIndex((book) => book.id === parseInt(bookId));
            if (index === -1) {
                callback(new Error('Book not found'));
            } else {
                books.splice(index, 1);
                saveBooks(books, callback);
            }
        }
    });
}

function loadBooks(callback) {
    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                callback(null, []);
            } else {
                callback(err);
            }
        } else {
            try {
                const books = JSON.parse(data);
                callback(null, books);
            } catch (err) {
                callback(err);
            }
        }
    });
}

function saveBooks(books, callback) {
    const data = JSON.stringify(books);
    fs.writeFile('books.json', data, 'utf8', callback);
}