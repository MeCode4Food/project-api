const store = require('../../../../models/project').store
module.exports = (req, res) => {
  res.status(200).send(store)
}