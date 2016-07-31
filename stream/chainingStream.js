var fs = require("fs");
var zlib = require('zlib');

//compress the file input.txt to input.txt.gz

// fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));

// console.log("File Compressed");

//decompressing the same file

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('shree.txt'));

  //console.log( __filename );