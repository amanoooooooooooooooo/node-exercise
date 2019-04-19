
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.
Save the following server in example.js:
*/

var net = require('net')

var { generateServer } = require('./server')

console.log('process', process.argv)

var server = net.createServer(function (socket) {
  console.log('start server')
  console.log('debug remoteAddress', socket.remoteAddress)
  console.log('debug localAddress', socket.localAddress)
  socket.setEncoding('utf8')

  socket.on('data', function (data) {
    console.log('server server onData ', data)
    // socket.write(data);
    // socket.pipe(socket)
    if (data === 'fuckme') {
      generateServer(socket)
    }
  })

  // socket.pipe(socket);
  socket.on('end', function (err) {
    if (err) console.log('error ', err)
    console.log('onEnd ')
  })
  socket.on('error', function (err) {
    console.log('error', err)
  })
  socket.on('connect', function (err) {
    console.log('onConnect', err)
  })
})

server.listen(3002)
