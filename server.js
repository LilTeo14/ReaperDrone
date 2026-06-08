const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0];
    console.log(`[Request] ${req.method} ${req.url}`);
    
    // Normalize and strip base path
    if (urlPath.startsWith('/ReaperDrone/')) {
        urlPath = urlPath.substring('/ReaperDrone'.length);
    }
    
    if (urlPath === '/' || urlPath === '') {
        urlPath = '/index.html';
    }
    
    let filePath = path.join(PUBLIC_DIR, decodeURIComponent(urlPath));
    
    function serveFile(targetPath) {
        const ext = path.extname(targetPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        
        const stream = fs.createReadStream(targetPath);
        stream.on('error', (err) => {
            console.error(`[Error] Streaming file: ${err.message}`);
            if (!res.headersSent) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        });
        stream.pipe(res);
    }
    
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(`[404] File not found: ${filePath}`);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            // Try to serve 404.html if it exists
            const custom404 = path.join(PUBLIC_DIR, '404.html');
            if (fs.existsSync(custom404)) {
                fs.createReadStream(custom404).pipe(res);
            } else {
                res.end('<h1>404 Not Found</h1>');
            }
            return;
        }
        
        if (stats.isDirectory()) {
            const indexFile = path.join(filePath, 'index.html');
            fs.stat(indexFile, (indexErr, indexStats) => {
                if (!indexErr && indexStats.isFile()) {
                    serveFile(indexFile);
                } else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.end('<h1>404 Not Found (Directory index not found)</h1>');
                }
            });
        } else if (stats.isFile()) {
            serveFile(filePath);
        } else {
            res.statusCode = 404;
            res.end('Not Found');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
