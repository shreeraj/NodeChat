var buffer1 = new Buffer("Shree Raj Karki ");
var buffer2 = new Buffer("Simply Easy Learning");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("Buffer 3 content : "+buffer3.toString());