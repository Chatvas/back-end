const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3080, clientTracking: true });

server.on('connection', ws => {
    ws.send('Hello world');
    ws.on('message', message => {
	console.log(`received ${message}`);
    });
});

server.on('error', error => console.error(error));
