var fs = require('fs');

var readStream = fs.createReadStream('input');
var writeSteam = fs.createWriteStream('output1.txt');

readStream.pipe(writeSteam);
console.log('the end \n');