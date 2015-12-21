
var buf = new Buffer(256);

var len = buf.write("hello node js");

console.log("write len " + len);

var  buf1 = new Buffer(256);

for (var i = 0; i < 256; i++) {
	buf1[i] = 97 + i;
};
console.log(buf1.toString('ascii',0,26));

console.log(buf1.toString('ascii',0,10));

console.log(buf1.toString('utf8',0,256));

console.log(buf1.toString('utf16le',0,256));

console.log(buf1.toString(undefined,0,11));

var buf2  = new Buffer("中国 人民 ",'utf8');

var json = buf2.toJSON(buf2);
console.log(json);

var buf3 = new Buffer("taiwan xianggang ");
var buf4 = buf3.slice(0,5);

console.log("buf4 = " + buf4.toString());