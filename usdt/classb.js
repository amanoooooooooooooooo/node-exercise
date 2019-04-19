const sha256 = require('sha256')

const SENDER = '15qgDTLGWytZaZwaF9kpBhXFbhTdwFU8tJ'
const SCRIPT_DATA = '0321efc76ff52ccb80f7fd60fc650806d338000000000000000000000000000000'

function logValue (str, buffer) {
  console.log(str + '%s, hex is %s', parseInt('0x' + buffer.toString('hex')), buffer.toString('hex'))
}

const crypto = require('crypto')



console.log('sha256  0 is ', sha256(SENDER))
console.log('sha256  4 is ', crypto.createHash('sha256').update(SENDER).digest('hex') )
console.log('sha256  2 is ', crypto.createHmac('sha256', '1').update(SENDER).digest('hex') )
console.log('sha256  3 is ', crypto.createHmac('sha256', '2').update(SENDER).digest('hex') )

function interpret (sender, multisig) {
  console.log('----------start interpret class B---------')
  console.log('sender is ', sender)
  console.log('MULTISIG is ', multisig)
  const sliceData = Buffer.from(multisig, 'hex').slice(1, -1)
  const sha = Buffer.from(sha256(sender), 'hex')
  console.log('sha result is', sha.length, sha)

  const data = Buffer.alloc(32)
  console.log('data is', data.length, data)

  for (let i = 0; i < sha.length; i++) {
    data[i] = sha[i] ^ sliceData[i]
  }
  const type = data.slice(4, 5)
  logValue('type is ', type)
  const value = data.slice(9, 17)
  logValue('value is ', value)
  const propertId = data.slice(5, 9)
  logValue('propertId is ', propertId)
  console.log('interpret data is ', data.toString('hex'))
}

// interpret(SENDER, SCRIPT_DATA)
interpret('3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL', '02f88f01791456f6d7616b7ddfc2efbba47985a52acf05c58d6df4c8cb2360a58c')
