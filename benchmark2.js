
// var Benchmark = require('benchmark')
// var suite = new Benchmark.Suite()
// const fetch = require('node-fetch')

// // add tests
// suite.add('RegExp#test', async function () {
//   fetch('https://trezormgr.whalebank.cn/test/').then(res => {
//     console.log('status ', res.status)
//   })
// })
// //   .add('String#indexOf', function () {
// //     'Hello World!'.indexOf('o') > -1
// //   })
// // add listeners
// //   .on('cycle', function (event) {
// //     console.log('cycle', String(event.target))
// //   })
//   .on('complete', function () {
//     console.log('Fastest is ' + this.filter('fastest').map('name'))
//   })
// // run async
//   .run({ 'async': true })

const fetch = require('node-fetch')

const assert = require('assert')
// fetch('https://trezormgr.whalebank.cn/test/').then(res => {
//   console.log('status ', res.status)
//   return res.text()
// })

const delay = (time) =>
  new Promise(resolve => setTimeout(() => resolve(true), time))

async function main () {
  var arr = Array(1000).fill(1)
  for (const _ of arr) {
    await fetch('https://fe2o3.club/test/').then(res => {
      assert.strictEqual(200, res.status, 'should be 200')
      process.stdout.write(res.status.toString())
      return res.text()
    })
  }
  console.log('main finish')
}
async function main2 () {
  var arr = Array(1000).fill(1)
  for (const _ of arr) {
    await fetch('http://trezormgrhk.whalebank.cn/test/').then(res => {
      assert.strictEqual(200, res.status, 'should be 200')
      process.stdout.write(res.status.toString())
      return res.text()
    })
    await delay(10)
  }
  console.log('main 2 finish')
}
async function main3 () {
  var arr = Array(1000).fill(1)
  for (const _ of arr) {
    await fetch('https://trezormgr.whalebank.cn:443/api2/wallet/txps/signed', {
      headers: {
        Authorization: 'Basic amhhZG1pbjpKaDEyMDA4IyQ='
      },
      method: 'POST'
    }).then(res => {
      // assert.strictEqual(200, res.status, 'should be 200')
      process.stdout.write(res.status.toString())
      return res.text()
    })
    await delay(10)
  }
  console.log('main 3 finish')
}

const req = async () => {
  const time = Math.round(Math.random() * MAX) * 1000
  console.log(time)
  await fetch('https://util.online/delay/' + time, {
  }).then(res => {
    assert.strictEqual(200, res.status, 'util should be 200')
    process.stdout.write(res.status.toString())
    return res.text()
  })
}
async function main4 () {
  var arr = Array(TIMES).fill(1)
  for (const _ of arr) {
    req()
    await delay(100)
  }
  console.log('main 4 finish')
}

const req2 = async () => {
  const time = Math.round(Math.random() * MAX) * 1000
  console.log(time)
  await fetch('https://trezormgr.whalebank.cn:443/api2/delay/' + time, {
  }).then(res => {
    assert.strictEqual(200, res.status, 'api2 should be 200')
    process.stdout.write(res.status.toString())
    return res.text()
  })
}
async function main5 () {
  var arr = Array(TIMES).fill(1)
  for (const _ of arr) {
    req()
    await delay(100)
  }
  console.log('main 5 finish')
}
const TIMES = 1
const MAX = 400

// main()
main5()
main4()
