// console.log(__filename)
// console.log(__dirname)

// console.log('log')
// console.info('info')
// console.error('error')
// console.warn('warn')
// var obj = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 4,
//     e: 5
//   }
// }
// console.log('obj is ', obj)
// console.dir(obj)
// console.time('time')
// console.timeEnd('time')

// console.trace('trace')
// console.assert(1 === 1, 'assert false')

// console.log('finish')

var fs = require('fs')

const { Console } = require('console')
const output = fs.createWriteStream('./stdout.log')
const errorOutput = fs.createWriteStream('./stderr.log')
// custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput })
// use it like console
const count = 5
logger.log('count: %d', count)
