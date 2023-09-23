const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
            <h1>This is The Home Page</h1>
        `);
    } else if (req.url === '/about') {
        res.end(`About section, now No info it's working`);
    } else {
        // Set the status code to 404 for routes that don't match
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Oops error 404</h1>
        `);
    }
});

server.listen(786, () => {
});
