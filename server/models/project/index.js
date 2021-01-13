module.exports.store = []

module.exports.responseDocs = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the project",
      format: "uuid"
    },
    name: {
      type: "string",
      description: "Name of the project"
    },
    owner: {
      type: "string",
      format: "uuid",
      description: "Unique identifier for the owner of the project as an employee id"
    },
    state: {
      type: "string",
      enum: ["planned", "active", "done", "failed"],
      description: "State of the object"
    },
    progress: {
      type: "integer",
      description: "Progress of the project measured in percentage. Goes from 0 to 100"
    },
    participants: {
      type: "array",
      items: {
        type: "string",
        format: "uuid"
      },
      description: "List of employee's unique identifier. While list is required, it can be empty"
    },
  },
  required: [
    "id", "name", "owner", "state", "participants"
  ]
}

module.exports.updateInputDocs = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Name of the project"
    },
    owner: {
      type: "string",
      format: "uuid",
      description: "Unique identifier for the owner of the project as an employee id"
    },
    state: {
      type: "string",
      enum: ["planned", "active", "done", "failed"],
      description: "State of the object"
    },
    progress: {
      type: "integer",
      description: "Progress of the project measured in percentage. Goes from 0 to 100"
    }
  }
}

module.exports.newInputDocs = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Name of the project"
    },
    owner: {
      type: "string",
      format: "uuid",
      description: "Unique identifier for the owner of the project as an employee id"
    },
    state: {
      type: "string",
      enum: ["planned", "active", "done", "failed"],
      description: "State of the object"
    },
  },
  required: [
    "name", "owner", "state"
  ]
}

