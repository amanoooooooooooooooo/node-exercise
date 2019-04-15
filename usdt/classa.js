
const SENDER = '15og4WXZPwkMnnsb3dj6HqgTUfcRLx4J9b'
const SCRIPT_DATA = '1e00000000000000020000000005f5e100000000'

function logValue (str, buffer) {
  console.log(str + '%s, hex is %s', parseInt('0x' + buffer.toString('hex')), buffer.toString('hex'))
}

function interpret (sender, p2pkh) {
  console.log('----------start interpret class A---------')
  console.log('sender is ', sender)
  console.log('P2PKH is ', p2pkh)

  const data = Buffer.from(p2pkh, 'hex')
  console.log('data is', data.length, data)

  const value = data.slice(9, 17)
  logValue('value is ', value)
  const propertId = data.slice(5, 9)
  logValue('propertId is ', propertId)
  console.log('interpret data is ', data.toString('hex'))
}

interpret(SENDER, SCRIPT_DATA)
