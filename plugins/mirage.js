// /plugins/mirage.js

if (process.env.NODE_ENV === 'development') {
  const server = require('../miragejs/server')

  server.makeServer()
}
