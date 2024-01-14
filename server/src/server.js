require('dotenv').config();

const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listen in http://localhost:${PORT}`);
})