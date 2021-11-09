const child_process = require("child_process");

const command = "git rev-parse --short HEAD";
const commitId = (function() {
  return child_process.execSync(command).toString().trim();
})();

module.exports = {
  commitId,
};

