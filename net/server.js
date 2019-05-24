const net = require('net')

function generateServer (daemonSocket) {
//   console.log('daemonSocket is ', daemonSocket)

  var server = net.createServer(function (socket) {
    console.log('generateServer start')

    console.log('debug remoteAddress', socket.remoteAddress)
    console.log('debug localAddress', socket.localAddress)
    console.log('debug localPort', socket.localPort)
    console.log('debug remotePort', socket.remotePort)

    socket.setEncoding('utf8')

    daemonSocket.pipe(socket)
    socket.pipe(daemonSocket)

    // socket.on('data', function (chunk) {
    //   socket.write(chunk)
    // })
    // socket.on('end', socket.end)

    socket.on('data', function (chunk) {
      console.log('generateServer onData ', chunk)
      // socket.write(chunk)
    })
    // socket.on('end', socket.end)
    socket.on('error', function (err) {
      console.log('generateServer error', err)
    })
  })

  server.listen(3003, () => {
    console.log('generateServer start')
  })
}

exports.generateServer = generateServer
