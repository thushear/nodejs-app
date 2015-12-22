/**
 * Created by kongming on 2015/12/22.
 */

//全局变量
console.log(__filename);

console.log(__dirname);

function hello(){
    console.log("hello world \n");
}

setTimeout(hello,2000);

console.log("set time out start \n");

var inter = setInterval(hello,3000);

clearInterval(inter);

console.log("程序就开始:");

console.log("counter = %d ",10);

console.time("计时开始");

console.trace();

console.timeEnd("计时开始");

console.info("程序执行完毕");