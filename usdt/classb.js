const sha256 = require('sha256')

const SENDER = '15qgDTLGWytZaZwaF9kpBhXFbhTdwFU8tJ'
const SCRIPT_DATA = '0321efc76ff52ccb80f7fd60fc650806d338000000000000000000000000000000'

function logValue (str, buffer) {
  console.log(str + '%s, hex is %s', parseInt('0x' + buffer.toString('hex')), buffer.toString('hex'))
}

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
  const value = data.slice(9, 17)
  logValue('value is ', value)
  const propertId = data.slice(5, 9)
  logValue('propertId is ', propertId)
  console.log('interpret data is ', data.toString('hex'))
}

interpret(SENDER, SCRIPT_DATA)
interpret('1PAXf3x3BWezBLxv2wSZD3DFpPThcwj9i8', '039801c90ff869ff82fc9b6014eefbe46dac000000000000000000000000000001')
