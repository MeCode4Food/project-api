module.exports = {
  description: 'Get All Projects',
  // parameters: [
  //   {
  //     in: "path",
  //     name: "name",
  //     description: "Name of the project",
  //     schema: {
  //       type: "string"
  //     }
  //   }
  // ],
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
    }
  }
}
