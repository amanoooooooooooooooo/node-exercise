var net = require('net')

var server = net.createServer(function (socket) {
  console.log('client client start')

  socket.on('data', function (data) {
    console.log('client client  onData ', data)
  })

  socket.pipe(socket)
  socket.on('end', function (err) {
    if (err) { console.log('err', err) }
    console.log('client clinet  onEnd ')
  })
  socket.on('error', function (err) {
    console.log('client clinet  error', err)
  })
})

server.listen(4003)
