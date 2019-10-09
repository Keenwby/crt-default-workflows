const core = require('@actions/core');
const github = require('@actions/github');

try {
  const target_tuples = core.getInput('target_tuples');
  const code_version = core.getInput('code_version');
  const config_version = core.getInput('config_version');
  const distribution_percentage = core.getInput('distribution_percentage');

  console.log(`Deploying code_version: ${code_version}, config_version: ${config_version} on targets: ${target_tuples} with distribution_percentage ${distribution_percentage}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
