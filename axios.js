const axios = require('axios')
const fs = require('fs')

axios({
  method: 'get',
  url: 'http://localhost:3000',
  responseType: 'blob'
})
  .then(function (response) {
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
  }).catch(e => console.log(e))
