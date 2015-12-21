var fs = require('fs');

//非阻塞异步IO
fs.readFile('input1',function(err,data){
    if (err) { return console.error(err.stack)};
    console.log(data.toString());
});

console.log("end \n");