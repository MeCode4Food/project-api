const store = require('../../../../models/project').store
const axios = require('axios')

module.exports = async (req, res) => {
  const newProject = { id: Math.floor(Math.random()*1000), ...req.body, participants: [] }
  const ownerId = req.body.owner
  const employeeInfo = (await axios.get(`https://employees-api.vercel.app/api/employees/${ownerId}`)).data
  if (employeeInfo.role !== 'manager') {
    res.status(400).send({
      details: "Owner should be have role equal to manager",
      status: 400,
      title: "Bad Request"
    })
  }
  store.push(newProject)
  res.status(200).send(newProject)
}