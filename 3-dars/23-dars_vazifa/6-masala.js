const events = require('events');
const readline = require('readline');
const emitter = new events.EventEmitter();

function dataReceivedHandler(data) {
    console.log('dataReceived hodisa yuz berdi. Ma\'lumotlar:', data);
}

emitter.on('dataReceived', dataReceivedHandler);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Iltimos, ma\'lumotingizni kiriting: ', (data) => {
    emitter.emit('dataReceived', data);
    rl.close();
});