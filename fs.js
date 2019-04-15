var fs = require('fs')

fs.stat('/', function (err, stats) {
  if (err) {
    return console.error(err)
  }
  console.log(stats)
  console.log('读取文件信息成功！')

  console.log('isFile', stats.isFile())
  console.log('isDirectory', stats.isDirectory())
  console.log('isBlockDevice', stats.isBlockDevice())
  console.log('isCharacterDevice', stats.isCharacterDevice())
  console.log('isSymbolicLink', stats.isSymbolicLink())
  console.log('isSocket', stats.isSocket())
})
