const EventEmitter = require('events');

const event = new EventEmitter();

event.on('hello', () => {
    console.log('Hello there. This is event driven message.');
});

event.emit('hello')