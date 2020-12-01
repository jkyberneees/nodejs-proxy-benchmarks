'use strict'

const http = require('http')
const { proxy } = require('fast-proxy')({})
const proxyServer = http.createServer((req, res) => {
  proxy(req, res, 'http://127.0.0.1:3000' + req.url, {})
})
proxyServer.listen(8080)
