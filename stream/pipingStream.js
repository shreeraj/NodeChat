var fs = require("fs");

//create a readable stream
var readerStream = fs.createReadStream('input.txt');

//create a write stream
var writeStream = fs.createWriteStream('test.txt');

//pipe the read and write operations
//reading input.txt and saving into test.txt
readerStream.pipe(writeStream);

console.log("Program Ended");