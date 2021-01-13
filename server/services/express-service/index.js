const bodyParser = require('body-parser')
const express = require('express')
const morganLogger = require('morgan')

exports.createExpressInstance = () => {
  const server = express()
  // add any express middlwares here like compression and cors
  server.use(morganLogger('combined'))
  server.use(bodyParser.json())
  return server
}