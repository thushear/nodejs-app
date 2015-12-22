/**
 * Created by kongming on 2015/12/22.
 */

var server = require('./server');
var router = require('./router');

server.start(router.route);