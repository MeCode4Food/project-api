const store = require('../../../../models/project').store
const axios = require('axios')

module.exports = async (req, res) => {
  const projectID = req.params.id
  const propsToUpdate = req.body
  const projectIndex = store.findIndex(project => project.id === Number(projectID))
  
  if (projectIndex === -1) {
    res.status(200).send({
      details: "Project not found",
      status: 404,
      title: "Bad Request"
    })
  }

  const project = store[projectIndex]
  const ownerId = project.owner
  const participantIDs = propsToUpdate.participants

  const ownerInfo = (await axios.get(`https://employees-api.vercel.app/api/employees/${ownerId}`)).data
  let listOfEmployees = await Promise.all(participantIDs.map(id => axios.get(`https://employees-api.vercel.app/api/employees/${id}`)))
  listOfEmployees = listOfEmployees.map(response => response.data)

  listOfEmployees.forEach(employee => {
    if (employee.department !== ownerInfo.department) {
      res.status(400).send({
        details: "List contains employee not in the same department as owner",
        status: 400,
        title: "Bad Request"
      })
    }
  })
  store[projectIndex] = { ...store[projectIndex], ...propsToUpdate }
  res.status(200).send(store[projectIndex])
}