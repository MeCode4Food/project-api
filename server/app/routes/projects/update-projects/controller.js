const store = require('../../../../models/project').store

module.exports = (req, res) => {
  const projectID = req.query.id
  const propsToUpdate = req.body
  const projectIndex = store.findIndex(id => id === projectID)
  store[projectIndex] = { ...store[projectIndex], ...propsToUpdate }
  res.status(200).send(store[projectIndex])
}