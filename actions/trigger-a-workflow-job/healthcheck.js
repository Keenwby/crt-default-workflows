const core = require('@actions/core');
const github = require('@actions/github');

try {
  const condition = core.getInput('condition');
  const passingStatus = core.getInput('passing_status');
  console.log(`Heathcheck of condition $condition, passing_status $passing_status`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
