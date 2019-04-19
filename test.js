const crypto = require('crypto')

const hash1 = (x) => crypto.createHash('sha256').update(x).digest()
const hash2 = (x) => crypto.createHash('sha256').update(x).digest('hex')

const a = '006EC899C0BBDB7921092346E047A8CF4E4874AD6D' 
const b = Buffer.from(a, 'hex')

var c= hash2(hash1(b))


console.log(c)
