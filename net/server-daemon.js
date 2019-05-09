
var net = require('net')
const { REQ_CON } = require('./constants')

var { generateServer } = require('./server')

console.log('process', process.argv)

var server = net.createServer(function (socket) {
  console.log('start server-daemon')

  console.log('debug remoteAddress', socket.remoteAddress)
  console.log('debug localAddress', socket.localAddress)
  console.log('debug localPort', socket.localPort)
  console.log('debug remotePort', socket.remotePort)

  socket.setEncoding('utf8')

  socket.on('data', function (data) {
    console.log('server daemon onData ', data)
    // socket.write(data);
    // socket.pipe(socket)
    if (data === REQ_CON) {
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

server.listen(3002, () => {
  console.log('server daemon start')
})
