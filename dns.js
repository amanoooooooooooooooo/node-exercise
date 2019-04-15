const dns = require('dns')

dns.lookup('iana.org', (err, address, family) => {
  if (err) {
    console.log('err is ', err)
  }
  console.log('address: %j family: IPv%s', address, family)
})
// address: "192.0.43.8" family: IPv4

dns.resolve4('baidu.com', (err, addresses) => {
  if (err) throw err

  console.log(`addresses: ${JSON.stringify(addresses)}`)

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        console.error('error is ', err)
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`)
    })
  })
})
