module.exports = {
  description: 'Update Project',
  parameters: [
    {
      in: "path",
      name: "id",
      description: "UUID of the project",
      schema: {
        type: "string",
        format: "uuid"
      }
    },
    {
      in: "body",
      name: "project",
      description: "Properties of the project. All properties are overridden based on the body's contents",
      schema: {
        $ref: "#/components/schemas/ProjectUpdateInput"
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
              details: { type: "string", example: "Owner should be have role equal to manager" },
              status: { type: "integer", example: 400 },
              title: { type: "string", example: "Bad Request" }
            }
          }
        }
      }
    }
  }
}
