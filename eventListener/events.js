var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1
var listener1 = function listener1(){
	console.log("listener1 executed");
}

//listner2

var listner2 = function listner2(){
	console.log("listner2 executed");
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listener1);

//Bind the connection event with the listner2 function
eventEmitter.addListener('connection',listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

//fire the connection event
eventEmitter.emit('connection');

//Remove the binding of listner1 function
eventEmitter.removeListener('connection',listener1);
console.log("listner1 will not listner now");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listnening to connection event");
console.log("Program end");

eventEmitter.emit('connection');