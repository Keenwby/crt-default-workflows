const core = require('@actions/core');
const github = require('@actions/github');

try {
  const condition = core.getInput('condition');
  const passingStatus = core.getInput('passing_status'); 
  const fabricNames = core.getInput('fabric_names');
  const tags = core.getInput('tags');
  console.log(`Heathcheck on fabrics ${fabricNames}, tags ${tags}`);
  console.log(`Heathcheck of condition ${condition}, passing_status ${passingStatus}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
