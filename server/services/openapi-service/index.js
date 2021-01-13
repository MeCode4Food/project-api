const openapi = require('@wesleytodd/openapi')
const projectModel = require('../../models/project')

const oapi = openapi({
  openapi: '3.0.0',
  info: {
    title: 'Project API Docs',
    description: 'OpenAPI documentation of the Project API specs'
  },
  servers: [
    {
      url: 'http://localhost:8080'
    }
  ]
})

oapi.schema('ProjectResponse', projectModel.responseDocs)
oapi.schema('ProjectUpdateInput', projectModel.updateInputDocs)
oapi.schema('ProjectNewInput', projectModel.newInputDocs)

module.exports = oapi