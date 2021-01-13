module.exports = {
  description: 'Assign Participants To Project',
  parameters: [
    {
      in: "query",
      name: "id",
      description: "UUID of the project",
      schema: {
        type: "string",
        format: "uuid"
      }
    },
    {
      in: "body",
      name: "participants",
      description: "List of participants ID to assign to project",
      schema: {
        type: "array",
        items: {
          type: "string",
          format: "uuid",
          description: "ID of participants"
        }
      }
    }
  ],
  responses: {
    200: {
      description: 'success',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              data: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ProjectResponse'
                }
              }
            }
          }
        }
      }
    },
    500: {
      description: 'Internal server error'
    },
    400: {
      description: 'Failed Input Validation',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              details: { type: "string", example: "Employee ID 3fa85f64-5717-4562-b3fc-2c963f66afa6 not found" },
              status: { type: "integer", example: 400 },
              title: { type: "string", example: "Bad Request" }
            }
          }
        }
      }
    }
  }
}
