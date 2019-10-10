const core = require('@actions/core');
const github = require('@actions/github');

try {
  const product = core.getInput('product');
  const condition = core.getInput('condition');
  const passingStatus = core.getInput('passing_status'); 
  const target_tuples = core.getInput('target_tuples');
  console.log(`Heathcheck on targets ${target_tuples}`);
  console.log(`Heathcheck of condition ${condition}, passing_status ${passingStatus}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
