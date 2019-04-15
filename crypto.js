const crypto = require('crypto')
const fs = require('fs')

const secret = 'abcdefg'
const hash = crypto.createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex')
console.log(hash)

// const { Certificate } = require('crypto')
// const spkac = fs.readFileSync('./www.fe2o3.club.crt')
// console.log('spkac is ', spkac)
// const publicKey = Certificate.exportPublicKey(spkac)
// console.log(publicKey)

const assert = require('assert')

// Generate Alice's keys...
const alice = crypto.createECDH('secp521r1')
const aliceKey = alice.generateKeys()
console.log('aliceKey is ', aliceKey)

// Generate Bob's keys...
const bob = crypto.createECDH('secp521r1')
const bobKey = bob.generateKeys()
console.log('bobKey is ', bobKey)

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey)
const bobSecret = bob.computeSecret(aliceKey)
console.log('aliceSecret is ', aliceSecret)
console.log('bobSecret is ', bobSecret)

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'))
// OK

// hash
const hash2 = crypto.createHash('sha256')
const input = fs.createReadStream('main.js')
input.pipe(hash2).pipe(process.stdout)

// generateKeyPairSync
const { generateKeyPairSync } = require('crypto')
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
})
console.log('publicKey is %s \n privateKey is  %s', publicKey, privateKey)
