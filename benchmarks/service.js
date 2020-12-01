'use strict'

const http = require('http')
const origin = http.createServer((req, res) => {
  res.end('Hello World!')
})
origin.listen(3000)
