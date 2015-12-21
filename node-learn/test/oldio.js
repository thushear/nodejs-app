var  fs = require("fs");

//同步执行的阻塞io
var data = fs.readFileSync('input');

console.log(data.toString());
console.log("end \n");

