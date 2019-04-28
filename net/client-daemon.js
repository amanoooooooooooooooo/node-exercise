
var net = require('net')
const { REQ_CON } = require('./constants')

const PORT = process.env.PORT || 3002
const IP = process.env.IP || '39.104.226.149'
const SERVICE_PORT = process.env.SERVICE_PORT || 3001

var socket = new net.Socket()
socket.connect(PORT, IP, function () {
  console.log('client daemon connected')
  socket.write(REQ_CON)
  console.log('debug remoteAddress', socket.remoteAddress)
  console.log('debug localAddress', socket.localAddress)
  console.log('debug localPort', socket.localPort)
  console.log('debug remotePort', socket.remotePort)
})

socket.setKeepAlive(true)
socket.on('data', function (data) {
  console.log('client server onData ' + data)
})

var to = net.createConnection({
  port: SERVICE_PORT
})

socket.pipe(to)
to.pipe(socket)

socket.on('close', function () {
  console.log('Connection closed')
})
