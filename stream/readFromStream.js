var fs = require("fs");
var data = '';

//create a readable stream
var readerStream = fs.createReadStream('input.txt');

//set the encoding to be utf8
readerStream.on('data',function(chunk){
	data +=chunk;
})

readerStream.on('end',function(){
	console.log(data);
})

readerStream.on('error',function(err){
	console.log(err.stack);
})

console.log("Program End");