/**
 * Created by kongming on 2015/12/22.
 */

var http =  require('http');
var url = require('url');


function start(route){

    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log('path = ' + pathname);
        route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("hello world \n");
        response.end();
    }

    http.createServer(onRequest).listen(5566);
    console.log("server start");
}


exports.start = start;