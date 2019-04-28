const crypto = require('crypto')

const algorithm = 'aes-192-cbc'
const password = 'Password used to generate key'
// Use the async `crypto.scrypt()` instead.
const key = crypto.scryptSync(password, 'salt', 24)
// Use `crypto.randomBytes` to generate a random iv instead of the static iv
// shown here.
const iv = Buffer.alloc(16, 0) // Initialization vector.

const cipher = crypto.createCipheriv(algorithm, key, iv)

let encrypted = cipher.update('some clear text data aaa bbb ccc ddd eee fff', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log('encrypted', encrypted)
// Prints: e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa

// const algorithm = 'aes-256-ctr'

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log('decrypted', decrypted)
// Prints: some clear text data
