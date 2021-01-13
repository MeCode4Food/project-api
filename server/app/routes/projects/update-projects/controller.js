const store = require('../../../../models/project').store

module.exports = (req, res) => {
  const projectID = req.path.id
  const propsToUpdate = req.body
  const projectIndex = store.findIndex(project => project.id === Number(projectID))

  if (projectIndex === -1) {
    res.status(404).send({
      details: "Project not found",
      status: 404,
      title: "Bad Request"
    })
  }
  store[projectIndex] = { ...store[projectIndex], ...propsToUpdate }
  res.status(200).send(store[projectIndex])
}