const octokit = require('@octokit/rest')();
const fs = require('fs');

function buildAnnotations() {
  const issues = JSON.parse(fs.readFileSync("/result.json", "utf-8"));
  const annotations = [];
  
  let count = 0;
  for(let issue of issues) {
    annotations.push({
      path: issue.file,
      start_line: issue.start.row,
      end_line: issue.end.row,
      title: issue.description,
      annotation_level: "failure",
      message: issue.key});
    count = count + 1;
    if (count === 50) {
// only 50 annotations allowed, see https://developer.github.com/v3/checks/runs/
      break;
    }
  }    
  
  return annotations;
}  

async function run() {
  
  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });
  
  const repo = process.env.GITHUB_REPOSITORY.split("/");
  const annotations = buildAnnotations();
  
  const create = await octokit.checks.create({
    owner: repo[0], 
    repo: repo[1], 
    name: "results",
    status: "completed",
    conclusion: "success",
    output: {title: "Summary", summary: "Summary", annotations},
    completed_at: new Date().toISOString(),
    head_sha: process.env.GITHUB_SHA});
}

run().then(text => {
  process.exit();
}).catch(err => {
  console.dir(err);
  process.exit(1);
});
