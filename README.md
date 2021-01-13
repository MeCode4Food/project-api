## ACME Corp. Project API Application

This is a Project API Application meant to manage projects under ACME Corp.

The entire application is contained within the `server` directory.

Running this application also serves a swagger ui under the path `/swaggerui`. Do add an ENV to switch this off in production if necessary.

### Install Application
`npm install`

### Run the app in production
`npm run start`

### Build and run the API inside a docker environment (production)

```sh
docker build . --tag=project-api
docker run -p 127.0.0.1:8080:8080 --name=project-api project-api
```

### Run the app locally with breakpoints (VSCode)

1. Set breakpoints in vscode by clicking on the line numbers on the side in the editor 
2. Run the debugger command
3. The debugger will pause execution on parts of the code automatically

### API Documentation 

The OpenAPI specifications of this project can be found by running the app locally and accessing the Swagger UI

1. Run `npm run start-local`
2. Go to `localhost:8080/swaggerui` (Change port number if necessary)

### Basic Requirements for Endpoints:

GET '/projects'
* Retrieves all projects
* Response should follow OpenAPI specs

POST '/projects'
* Creates a project
* See OpenAPI specs for request body shape
* Project must have:
  * name
  * owner
    * must have manager role.
    * owner as an employee which has an API at https://employees-api.vercel.app/
    * owner must be in the same department as participants
  * state
    * be either "planned" "active" "done" or "failed"
  * progress
    * be in percentage values
  * participants
    * are employees. See API at https://employees-api.vercel.app/
    * on project creation, not needed to be included in the body.
    * assigned to project via the `/assign-participants` endpoint
    * must be in the same department as the owner

PATCH '/projects/{id}'
* Updates a project of the same id
* See OpenAPI specs for request body shape
* Endpoint cannot remove participants
* Project must not violate the following:
  * Must have:
    * name
    * owner
      * must have manager role.
      * is an employee. See API at https://employees-api.vercel.app/ for employee API specs
      * owner must be in the same department as participants
    * state
      * be either "planned" "active" "done" or "failed"
    * progress
      * be in percentage values

POST '/projects/{id}/assign-participants'
* Updates only the participants for project of the same id
* See OpenAPI specs for request body shape
* Project must not violate the following:
  * Must have:
    * participants
      * are employees. See API at https://employees-api.vercel.app/ for employee API specs
      * must be in the same department as the owner

