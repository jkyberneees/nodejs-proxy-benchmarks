'use strict'

const proxy = require('http-proxy').createProxyServer({
  target: 'http://127.0.0.1:3000'
})
proxy.listen(8080)
