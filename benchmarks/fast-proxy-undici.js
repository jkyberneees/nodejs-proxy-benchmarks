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
  forward(req, res, req.url, {})
})
proxy.listen(8080)
