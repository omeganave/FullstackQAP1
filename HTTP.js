// HTTP is a module which allows Node.js to transfer data over the Hyper Text Transfer Protocol, or HTTP. It can be used to create HTTP web servers, handle incoming HTTP requests, make outbound HTTP requests, and so on. It is a fundamental part of many Node.js web applications.

// Including the HTTP module in the program.
const http = require('http');

// Creating a server using the createServer() method.
const server = http.createServer(function (req, res) {
    //Indicates that the status of the response is 200 (OK), and that the response contains HTML text.
    res.writeHead(200, {'Content-Type':'text/html'});
    // The body of the response, which will be displayed on the page.
    res.write('<html>');
    res.write('<head><title>Sample Page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello, this is a Node.js HTTP Server!</h1>');
    res.write('</body>');
    // Indicates that we're finished putting together the response, and to send it.
    res.end('</html>', () => {
        // Logs to the console that the response was sent succesfully.
        console.log('Response sent successfully.');
    });
})

// Specifying the port, 3000 in this case.
const port = 3000;

// Checking for whether the server encounters any errors.
server.on('error', (error) => {
    // Logs to the console an error, if one occurs.
    console.error('An error occurred! Error: ', error.message);
})

// The server should listen for HTTP requests from this specific port.
server.listen(port, () => {
    // Logs to the console the address and port that this server is listening to.
    console.log(`Server is running on http://localhost:${port}`);
})