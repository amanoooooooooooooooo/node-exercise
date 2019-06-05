var http = require('http')
var https = require('https')
var url = require('url')

var fs = require('fs')

var privateKey = fs.readFileSync('./whalewbskey.pem')
var certificate = fs.readFileSync('./whalewbs.pem')

const option2 = {
  // hostname: 'z.whalewbs.com',
  pfx: fs.readFileSync('./star.whalewbs.com.pfx'),
  passphrase: '123456'
}
const option = {
  key: privateKey,
  cert: certificate
}

function start (route) {
  function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + ' received.')

    route(pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }

  https.createServer(option2, onRequest).listen(443)
  console.log('Server has started.')
}

exports.start = start
