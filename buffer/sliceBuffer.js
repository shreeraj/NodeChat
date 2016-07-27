var buffer1 = new Buffer('Shreeraj');

var buffer2 = buffer1.slice(5,8);

console.log("buffer2 content : "+buffer2.toString());

//to print length of buffer 

console.log("Lenght of buffer2 is "+ buffer2.length);