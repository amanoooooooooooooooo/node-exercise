const net = require('net')

function generateServer (daemonSocket) {
//   console.log('daemonSocket is ', daemonSocket)

  var server = net.createServer(function (socket) {
    console.log('generateServer start')

    socket.on('data', function (data) {
      console.log('generateServer onData ', data)
    })

    socket.pipe(daemonSocket)
    daemonSocket.pipe(socket)
    socket.on('end', function (err) {
      if (err) { console.log('err', err) }
      console.log('generateServer  onEnd ')
    })
    socket.on('error', function (err) {
      console.log('generateServer error', err)
    })
  })

  server.listen(3003)
}

exports.generateServer = generateServer
