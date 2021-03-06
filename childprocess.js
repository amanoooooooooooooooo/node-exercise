// const { spawn } = require('child_process')
// const ls = spawn('ls', ['-lh', '/usr'])

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`)
// })

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`)
// })

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`)
// })

const { spawn } = require('child_process')
const ps = spawn('ps', ['ax'])
const grep = spawn('grep', ['ssh'])

ps.stdout.on('data', (data) => {
  grep.stdin.write(data)
})

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`)
})

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`)
  }
  grep.stdin.end()
})

grep.stdout.on('data', (data) => {
  console.log(data.toString())
})

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`)
})

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`)
  }
})
