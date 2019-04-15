const assert = require('assert')

const SENDER = '15og4WXZPwkMnnsb3dj6HqgTUfcRLx4J9b'
const SCRIPT_DATA = '6f6d6e69000000000000001f0000009d67d17ec1'

const START_HEADER = '6f6d6e69'

function logValue (str, buffer) {
  console.log(str + '%s, hex is %s', parseInt('0x' + buffer.toString('hex')), buffer.toString('hex'))
}

function interpret (sender, opReturn) {
  console.log('----------start interpret class C---------')
  console.log('sender is ', sender)
  console.log('OP_RETURN is ', opReturn)
  assert(opReturn.startsWith(START_HEADER))

  const data = Buffer.from(opReturn, 'hex').slice(4)
  console.log('data is', data.length, data)

  const value = data.slice(8, 16)
  logValue('value is ', value)
  const propertId = data.slice(4, 8)
  logValue('propertId is ', propertId)
  console.log('interpret data is ', data.toString('hex'))
}

interpret(SENDER, SCRIPT_DATA)
