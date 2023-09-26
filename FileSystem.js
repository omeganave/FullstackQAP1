// The File System module allows you and other Node applications to work with the file system on the local file system and remote servers. It allows you do do things such as read and write files, create and delete directories, and more.

// Comment or uncomment the following lines to run the code as you wish.

// Including the FileSystem module in the program.
const fs = require('fs');
// Also including the HTTP module to create a server.
var http = require('http');

// // Creating a server using the createServer() method.
// http.createServer(function (req, res) {
//     // Using File System to read a file (a_file.html).
//     fs.readFile('a_file.html', function (err, data) {
//         //Indicates that the status of the response is 200 (OK), and that the response contains HTML text.
//         res.writeHead(200, {'Content-Type':'text/html'});
//         // The body of the response, which will be displayed on the page.
//         res.write(data);
//         // Indicates that we're finished putting together the response, and to send it.
//         return res.end(() => {
//             // Logs to the console that the response was sent succesfully.
//             console.log('Response sent successfully.');
//         });
//     });
//     // Listens for HTTP requests on port 3000.
// }).listen(3000);

// Creating a new file using the appendFile() method.
fs.appendFile('appended_file.txt', 'Hello World', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Creating a new file using the open() method.
fs.open('opened_file.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Creating a new file using the writeFile() method.
fs.writeFile('written_file.txt', 'Hello World', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Appending a file using the appendFile() method.
fs.appendFile('appended_file.txt', 'New appended text!', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// Using the writeFile() method to rewrite to a file.
fs.writeFile('written_file.txt', 'Newly written text!', function (err) {
    if (err) throw err;
    console.log('Rewritten!');
});

// Using the unlink() method to delete files.
fs.unlink('appended_file.txt', function (err) {
    if (err) throw err;
    console.log('Deleted!');
});
fs.unlink('opened_file.txt', function (err) {
    if (err) throw err;
    console.log('Deleted!');
});

// Using the rename() method to rename a file.
fs.rename('written_file.txt', 'renamed_file.txt', function (err) {
    if (err) throw err;
    console.log('Renamed!');
})