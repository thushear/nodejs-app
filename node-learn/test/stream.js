var fs = require('fs');

var data = '';

var readStream  = fs.createReadStream('input');

readStream.setEncoding("utf8");


readStream.on('data',function(chunk){
	console.log('data \n');
	data += chunk;
});

readStream.on('end',function(){
   console.log('end \n');
   console.log("data = " +  data);
});

readStream.on('finish',function(){
	console.log('finish \n');
});
readStream.on('error',function(err){
	console.log('error \n');
	console.error(err.stack);
});

console.log('the end \n');