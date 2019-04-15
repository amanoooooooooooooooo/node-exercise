// 输出到终端
process.stdout.write('Hello World!' + '\n')

// 通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

// 获取执行路径
console.log('execPath is', process.execPath)

// 平台信息
console.log('platform is ', process.platform)
console.log('arch is ', process.arch)
console.log('title is ', process.title)

console.log('pid is ', process.pid)
console.log('getgid is ', process.getgid())
console.log('memoryUsage is ', process.memoryUsage())
process.nextTick(function () { console.log('nextTick') })
// console.log('nextTick is ')
console.log('umask is ', process.umask())
console.log('uptime is ', process.uptime())
console.log('hrtime is ', process.hrtime())
