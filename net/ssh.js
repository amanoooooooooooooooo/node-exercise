var path = require('path');
var fs = require('fs');
var Connection = require('ssh2');
var net = require('net')
var c
var username = 'root'
var hostname = '39.104.226.149'
var port = 22
var privKey = path.join('/Users/hikaruamano/.ssh', 'id_rsa')
var localAddr = 'localhost'
var localPort = '3001'
var remotePort = '3333'
var remoteAddr = '0.0.0.0'

c = new Connection()
c.on('connect', function() {
 console.log('Connection :: connect')
})

c.on('tcp connection', function(info, accept, reject) {
  console.log('TCP :: INCOMING CONNECTION: ' + 
  require('util').inspect(info));

  var stream = accept()
  var socket


  stream.on('data', function(data) {
    console.log('TCP :: DATA: ' + data);
  })

  stream.on('end', function() {
   console.log('TCP :: EOF');
  })

  stream.on('error', function(err) {
   console.log('TCP :: ERROR: ' + err);
  })

  stream.on('close', function(had_err) {
    console.log('TCP :: CLOSED', had_err ? 'had error' : '');
  })

  stream.pause()
  socket = net.connect(localPort, localAddr, function () {
    stream.pipe(socket);
    socket.pipe(stream);
    stream.resume();
  })
})

c.on('ready', function() {
  console.log('Connection :: ready')
  c.forwardIn(remoteAddr, remotePort, function(err) {
    if (err) { throw err }
    console.log('Forwarding connections from remote server on port 7070 to node socket!');
  })
})

 c.on('error', function(err) {
   console.log('Connection :: error :: ', err)
 })

  c.on('end', function() {
    console.log('Connection :: end')
  })

  c.on('close', function(had_error) {
    console.log('Connection :: close', had_error ? 'had error' : '')
  })

 var obj = {
  host: hostname,
  port: port,
  username: username,
  privateKey: fs.readFileSync(privKey).toString()
 }

 c.connect(obj)