const store = require('../../../../models/project').store

module.exports = (req, res) => {
  const newProject = { id: Math.floor(Math.random()*1000), ...req.body, participants: [] }
  store.push(newProject)
  res.status(200).send(newProject)
}