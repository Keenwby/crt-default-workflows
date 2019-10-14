const core = require('@actions/core');
const github = require('@actions/github');

try {
  const duration = core.getInput('duration');
  const reason = core.getInput('reason');
  const requires_manual_check = core.getInput('requires_manual_check');
  console.log(`Auto Pause for duration ${duration}, reason ${reason} and requires manual check ${requires_manual_check}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
//   Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
