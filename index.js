// var server = require('./http')
// var router = require('./router')

// server.start(router.route)

const addon = require('./build/Release/addon.node')
console.log('addon is ', addon)
console.log('hello is ', addon.hello())
