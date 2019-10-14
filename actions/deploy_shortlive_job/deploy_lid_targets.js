const core = require('@actions/core');
const github = require('@actions/github');

try {
  const product = core.getInput('product');
  const target_tuples = core.getInput('target_tuples');
  const code_version = core.getInput('code_version');
  const config_version = core.getInput('config_version');

  console.log(`Deploying product ${product} code_version: ${code_version}, config_version: ${config_version} on targets: ${target_tuples}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
