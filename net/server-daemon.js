
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.
Save the following server in example.js:
*/

var net = require('net')

console.log('process', process.argv)

function generateServer () {
  const { spawn } = require('child_process')
  const bat = spawn('node', ['./server-server.js'])

  bat.stdout.on('data', (data) => {
    console.log(data.toString())
  })

  bat.stderr.on('data', (data) => {
    console.log(data.toString())
  })

  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`)
  })
}

var server = net.createServer(function (socket) {
  console.log('start server')
  console.log('debug remoteAddress', socket.remoteAddress)
  console.log('debug localAddress', socket.localAddress)
  socket.setEncoding('utf8')
  let timer
  // timer = setInterval(() => {
  //     console.log('server send')
  //     // socket.write(Buffer.from('0102', 'hex'))
  //     socket.write('ssssd\r\n')
  // }, 3000)

  // socket.write('Echo server\r\n');

  socket.on('data', function (data) {
    console.log('server server onData ', data)
    // socket.write(data);
    // socket.pipe(socket)
    if (data === 'fuckme') {
      generateServer()
    }
  })

  // socket.pipe(socket);
  socket.on('end', function (err) {
    if (err) console.log('error ', err)
    console.log('onEnd ')
    clearInterval(timer)
  })
  socket.on('error', function (err) {
    console.log('error', err)
  })
  socket.on('connect', function (err) {
    console.log('onConnect', err)
  })
})

server.listen(3002)

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

// var net = require('net');

// var client = new net.Socket();
// client.connect(1337, '127.0.0.1', function() {
// 	console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// });

// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });

// client.on('close', function() {
// 	console.log('Connection closed');
// });
