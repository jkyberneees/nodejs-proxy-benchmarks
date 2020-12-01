'use strict'

const http = require('http')
const { proxy: forward } = require('fast-proxy')({})
const proxy = http.createServer((req, res) => {
  forward(req, res, 'http://127.0.0.1:3000' + req.url, {})
})
proxy.listen(8080)
