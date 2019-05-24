var http = require('http')
var url = require('url')

function start (route) {
  function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + ' received.')

    route(pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }

  http.createServer(onRequest).listen(3002)
  console.log('Server has started.')
}

exports.start = start

/// //// request
// var http = require('http')

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/headers'
//   // method: 'POST',
//   // headers: {
//   //   'Content-Type': 'application/x-www-form-urlencoded',
//   //   'Content-Length': Buffer.byteLength(postData)
//   // }
// }

// const req = http.request(options, function (res) {
//   // console.log('res ', res)
//   // res.pipe(process.stdout)
//   console.log(`STATUS: ${res.statusCode}`)
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
//   res.setEncoding('utf8')
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`)
//   })
//   res.on('end', () => {
//     console.log('No more data in response.')
//   })
// })

// req.end()
