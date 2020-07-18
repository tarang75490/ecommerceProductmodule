const config = require('./index')


exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Product Service APIs',
      description: 'Product related all CRUD APIs',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:'+config.server.port,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}