var events = require('events');

var eventsEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("listener1 \n");
}

var listener2 = function listener2(){
	console.log("listener2 \n");
}

eventsEmitter.addListener('connection',listener1);

eventsEmitter.on('connection',listener2);

var listenerCount = require('events').EventEmitter.listenerCount(eventsEmitter,'connection');
console.log(listenerCount + " listneer \n");

eventsEmitter.emit('connection');

console.log('end \n');