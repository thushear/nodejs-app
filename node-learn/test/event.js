// import events module
var events = require("events");

// create new emitter
var eventEmitter = new events.EventEmitter();

//create new handler
var connectionHandler = function(){
   console.log("connection \n");
   eventEmitter.emit('data_received');
};

eventEmitter.on('connection',connectionHandler);

eventEmitter.on('data_received',function(){
	console.log("data_received");
});

eventEmitter.emit('connection');

console.log("i am end \n");