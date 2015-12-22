/**
 * Created by kongming on 2015/12/22.
 */
var http =  require('http');
var url = require('url');
var util = require('util');

var queryString = require('querystring');

http.createServer(function(req,res){

    var post = '';
    req.on('data',function(chunk){
        post += chunk;
    });

    req.on('end',function(){
        res.writeHead(200,{'Content-Type':'text/plain'});
        post = queryString.parse(post);
        console.log(util.inspect(post));
        res.end(util.inspect(post));

    });

}).listen(3111);