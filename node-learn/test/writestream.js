var fs = require('fs');

var data = 'hello node js  语言在于speak \n';

var writestream = fs.createWriteStream('output.txt');



writestream.write(data,'UTF8');

writestream.end();

writestream.on('finish',function(){
  console.log("write finish \n");
});

writestream.on('error',function(err){
	console.log(err.stack);
});

console.log('the end \n');
