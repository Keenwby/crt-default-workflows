const core = require('@actions/core');
const github = require('@actions/github');

try {
  const target_tuples = core.getInput('target_tuples');
  const criteria = core.getInput('criteria');
  console.log(`EKG of criteria ${criteria} on targets %{target_tuples}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
