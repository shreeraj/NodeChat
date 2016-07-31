var fs = require("fs");
var data = 'Shree Raj Karki';

//creating a writable stream

var writterStream = fs.createWriteStream('output.txt');

//write the data to stream with encoding to be utf8
writterStream.write(data,'UTF8');

//mark the end of file
writterStream.end();

writterStream.on('finish',function(){
	console.log('Write Completed');
});

writterStream.on('error',function(err){
	console.log(err.stack);
})

console.log("Program Ended");