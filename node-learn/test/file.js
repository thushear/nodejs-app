/**
 * Created by kongming on 2015/12/22.
 */

var fs = require('fs');

//异步
fs.readFile('input.txt',function(err,data){
   if(err){
       console.error(err.stack);
   }
    console.log("data = " + data.toString());
});


var data = fs.readFileSync('input.txt');
console.log("同步读取完毕: " + data.toString());

console.log("读取api完毕");


fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.error(err.stack);
    }
    console.log("打开input.txt fd = %d \n",fd);
});

fs.stat('input.txt',function(err,stats){
    if(err){
        return  console.error(err.stack);
    }

    console.log(stats);


});

fs.writeFile('input.txt','通过WriteFile写入覆盖!',function(err){
    if(err){
        return  console.error(err.stack);
    }

    console.log('写入完毕\n');
    fs.readFile('input.txt',function(err,data){
        if(err){
            console.error(err.stack);
        }
        console.log("data = " + data.toString());
    });


});


var buf = new Buffer(1024);

fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.error(err.stack);
    }
    console.log("打开input.txt fd = %d \n",fd);

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            return  console.error(err.stack);
        }

        console.log('读取的字节数为:'  + bytes);
        console.log(buf.slice(0,bytes).toString());

        fs.close(fd,function(err){
            if(err){
                console.error(err.stack);
            }
            console.log('文件关闭成功');
        });
    });
});


//fs.unlink('input.txt',function(err){
//    if(err){
//        console.log(err.stack);
//    }
//    console.log("删除成功");
//});
//


//fs.mkdir('/tmp/test',function(err){
//    if(err){
//        return console.error(err);
//    }
//    console.log('目录创建成功');
//});

fs.readdir('/tmp',function(err,files){
    if(err){
        return console.error(err);
    }

    console.log('readdir \n');
    files.forEach(function(file){
        console.log(file);
    });
});