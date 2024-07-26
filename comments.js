// Create web server
// Create a web server that can listen to incoming requests and send back a response.

// 1. Import the http module
const http = require('http');

// 2. Create a server
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

// 3. Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 4. Run the file in the terminal
// node comments.js
// 5. Open the browser and go to http://localhost:3000
// 6. You should see the text 'Hello World'
// 7. To stop the server, press Ctrl + C in the terminal
// 8. To restart the server, run the file again
// node comments.js


