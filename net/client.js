var net = require('net')

var server = net.createServer(function (socket) {
  console.log('client start')

  console.log('debug remoteAddress', socket.remoteAddress)
  console.log('debug localAddress', socket.localAddress)
  console.log('debug localPort', socket.localPort)
  console.log('debug remotePort', socket.remotePort)

  socket.on('data', function (data) {
    console.log('client onData ', data)
  })

  socket.pipe(socket)
  socket.on('end', function (err) {
    if (err) { console.log('err', err) }
    console.log('client onEnd ')
  })
  socket.on('error', function (err) {
    console.log('client error', err)
  })
})

server.listen(4003)
