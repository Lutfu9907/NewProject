const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>index sayfasina hosgeldiniz</h2>');
    }
    else if (url === '/hakkinda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>hakkinda sayfasina hosgeldiniz</h2>');

    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>iletisim sayfasina hosgeldiniz</h2>');

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('Sayfa bulunamadi');
    }

    res.end();

})

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda baslatildi`);
});