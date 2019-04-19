/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net')

var client = new net.Socket()
client.connect(3002, '127.0.0.1', function() {
	console.log('client server Connected 3002')
	client.write('fuckme')
});

client.on('data', function(data) {
	console.log('client server onData ' + data)
	console.log('pipe to 4003')
});

var to = net.createConnection({
    port: 4003
})

client.pipe(to)
to.pipe(client)


client.on('close', function() {
	console.log('Connection closed');
});

// setInterval(() => {
//     client.write(Buffer.from('abcd', 'hex'));
// }, 2000);