const SIGNALE = require('signale')
const chalk = require('chalk')
const os = require('os')
const app = require('./app').createServer()

const port = process.env.SERVER_PORT || 8080

app.listen(port, error => {
  if (error) throw error

  SIGNALE.start(
    // NODE_ENV is set to local when running from the vscode debugger, see launch.json
    `Server started on ${chalk.white(os.hostname())} in ${chalk.yellow(process.env.NODE_ENV)} mode - ${chalk.cyan(`http://localhost:${port}`)}`
  )
})