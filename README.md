# Chatvas Server

This is the back-end server for Chatvas. 

To run it, first you need to have node.js and npm installed. Then, in the project directory, run `npm install` to install the needed dependency and then run `node index.js` to start the server. 

The script basically just spins up a WebSocket server on port 3080, and whenever it receives a message from a client relays that message to all other connected clients. It doesn't do anything else funny, so you can just follow the official WebSocket API when interacting with the server. [MDN has some good documentation for how to do that in the browser](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications).
