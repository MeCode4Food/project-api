module.exports = {
  description: 'Create New Project',
  parameters: [
    {
      in: "body",
      name: "project",
      description: "Details of the project",
      required: true,
      schema: {
        $ref: "#/components/schemas/ProjectNewInput"
      }
    }
  ],
  responses: {
    200: {
      description: 'success',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ProjectResponse'
          }
        }
      }
    },
    500: {
      description: 'Internal server error'
    },
    400: {
      description: 'Failed Input Validation - Owner should have role equal to manager',
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
    },
  }
}
