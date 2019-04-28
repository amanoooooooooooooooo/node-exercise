var net = require('net')

// parse "80" and "localhost:80" or even "42mEANINg-life.com:80"
var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/

var addr = {
  from: addrRegex.exec(process.argv[2]),
  to: addrRegex.exec(process.argv[3])
}

if (!addr.from || !addr.to) {
  console.log('Usage: <from> <to>')
  return
}

net.createServer(function (from) {
  var to = net.createConnection({
    host: addr.to[2],
    port: addr.to[3]
  })

  from.on('data', function (data) {
    console.log('from onData ', data.toString('ascii'))
  })
  to.on('data', function (data) {
    console.log('to onData ', data.toString('ascii'))
  })
  to.on('end', function (err) {
    console.log('to onEnd ')
  })
  from.on('end', function (err) {
    console.log('from onEnd ')
  })
  from.on('error', function (err) {
    console.log('error', err)
  })
  to.on('error', function (err) {
    console.log('error', err)
  })

  from.pipe(to)
  to.pipe(from)
}).listen(addr.from[3], addr.from[2], 2, () => {
  console.log('start net')
})
