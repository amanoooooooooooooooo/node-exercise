
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Expose-Headers', 'Date')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  //   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
app.get('/', function (req, res) {
  var data = '123'
  res.send(data)
})
app.get('/test', function (req, res) {
  var file = __dirname + '/ZipFile.zip'
  res.download(file) // Set disposition and send it.
})
app.listen(3002)
