const expressService = require('../services/express-service')
const oapi = require('../services/openapi-service')
const apiRoutes = require('./routes')

exports.createServer = () => {
  const server = expressService.createExpressInstance()

  server.get('/health', (req, res) => {
    res.status(200).send('Server is online!')
  })

  server.use(apiRoutes)
  server.use(oapi)
  server.use('/swaggerui', oapi.swaggerui)

  return server
}