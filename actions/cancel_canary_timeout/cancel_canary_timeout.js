const core = require('@actions/core');
const github = require('@actions/github');

try {
  const product = core.getInput('product');
  const targets = core.getInput('target_tuples');
  const requires_manual_check = core.getInput('requires_manual_check');
  console.log(`Cancel canary timeout for product ${product} targets ${targets}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
//   Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
