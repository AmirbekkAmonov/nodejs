const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // URL ni olish
  const url = req.url;
  
  // HTML fayllarni qaytarish
  if (url === '/' || url === '/home') {
    return serveHTML('home.html', res);
  } else if (url === '/about') {
    return serveHTML('about.html', res);
  } else if (url === '/blog') {
    return serveHTML('blog.html', res);
  } else if (url === '/contact') {
    return serveHTML('contact.html', res);
  } else if (url === '/login') {
    return serveHTML('login.html', res);
  } else if (url === '/joinus') {
    return serveHTML('joinus.html', res);
  } else if (url === '/product') {
    return serveHTML('product.html', res);
  } else if (url === '/price') {
    return serveHTML('price.html', res);
  } else {
    // 404 sahifasini qaytarish
    return serveHTML('404.html', res);
  }
});

// HTML faylni qaytarish uchun funksiya
function serveHTML(filename, res) {
  fs.readFile(`public/${filename}`, 'utf8', (err, data) => {
    if (err) {
      // Xato xabarini qaytarish
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    
    // Faylni qaytarish
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

// Serverni 3000-portda ishga tushirish
server.listen(3000, () => {
  console.log('Server ishga tushdi: http://localhost:3000/');
});