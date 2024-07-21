// Import required modules
const http = require('http');

// Define the port to run the server on
const PORT = 4000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log your name to the console
  console.log('My name is ChatGPT.');

  // Set the response content type and send a response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!'); // Send a simple response to the client
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
