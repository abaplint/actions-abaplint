const octokit = require('@octokit/rest')();
const fs = require('fs');

function buildAnnotations() {
  const issues = JSON.parse(fs.readFileSync("/result.json", "utf-8"));
  const annotations = [];

  for(let issue of issues) {
    annotations.push({
      path: issue.file.substring(2),
      start_line: issue.start.row,
      end_line: issue.end.row,
      title: issue.description,
      annotation_level: "failure",
      message: issue.key});
    if (annotations.length === 50) {
      break; // only 50 annotations allowed, see https://developer.github.com/v3/checks/runs/
    }
  }

  return annotations;
}

function buildSummary() {
  const issues = JSON.parse(fs.readFileSync("/result.json", "utf-8"));
  return issues.length + " issues found(first 50 shown)";
}

async function run() {
  const annotations = buildAnnotations();
  const summary = buildSummary();

  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });

  const repo = process.env.GITHUB_REPOSITORY.split("/");

  const create = await octokit.checks.create({
    owner: repo[0],
    repo: repo[1],
    name: "moo" + process.env.GITHUB_WORKFLOW,
    status: "completed",
    conclusion: annotations.length === 0 ? "success" : "failure",
    output: {title: "Summary", summary, annotations},
    completed_at: new Date().toISOString(),
    head_sha: process.env.GITHUB_SHA});
}

run().then(text => {
  process.exit();
}).catch(err => {
  console.dir(err);
  process.exit(1);
});
