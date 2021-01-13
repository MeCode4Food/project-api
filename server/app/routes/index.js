const express = require('express')
const router = express.Router()

const projectRouter = require('./projects')

router.use('/projects', projectRouter)

module.exports = router