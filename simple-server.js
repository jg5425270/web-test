const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  try {
    const filePath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(html);
  } catch (error) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('File not found');
  }
});

const PORT = process.env.PORT || 5173;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 JJM Technology website running on http://0.0.0.0:${PORT}`);
});