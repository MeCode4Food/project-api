const express = require('express')
const router = express.Router()
const oapi = require('../../../services/openapi-service')

// controllers
const getAllProjectsController = require('./get-all-projects/controller')
const createNewProjectController = require('./create-new-project/controller')
const updateProjectsController = require('./update-projects/controller')
const assignParticipantToProjectController = require('./assign-participant-to-project/controller')

// docs
const getAllProjectsDocs = require('./get-all-projects/docs')
const createNewProjectDocs = require('./create-new-project/docs')
const updateProjectsDocs = require('./update-projects/docs')
const assignParticipantToProjectDocs = require('./assign-participant-to-project/docs')

router.get('', oapi.path(getAllProjectsDocs),  getAllProjectsController)
router.post('', oapi.path(createNewProjectDocs), createNewProjectController)
router.patch('/{id}', oapi.path(updateProjectsDocs), updateProjectsController)
router.post('/{id}/assign-participants', oapi.path(assignParticipantToProjectDocs), assignParticipantToProjectController)

module.exports = router
