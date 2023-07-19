const childProcess = require('node:child_process')

function getCommitHash () {
  return childProcess.execSync('git rev-parse --short HEAD').toString().trim()
}

module.exports = () => {
  return {
    hash: getCommitHash()
  }
}
