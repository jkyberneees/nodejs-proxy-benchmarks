'use strict'

const http = require('http')
const { proxy: forward } = require('fast-proxy')({
  base: 'http://127.0.0.1:3000/',
  undici: {
    connections: 100,
    pipelining: 10
  }
})
const proxy = http.createServer((req, res) => {
  forward(req, res, req.url, {
    rewriteRequestHeaders (req, headers) {
      delete headers.connection

      return headers
    }
  })
})
proxy.listen(8080)
