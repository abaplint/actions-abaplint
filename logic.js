const octokit = require('@octokit/rest')();
const fs = require('fs');

async function run() {
  
  const issues = JSON.parse(fs.readFileSync("/result.json", "utf-8"));
  console.dir(issues);
  
  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });
  
  const repo = process.env.GITHUB_REPOSITORY.split("/");
  
  const create = await octokit.checks.create({
    owner: repo[0], 
    repo: repo[1], 
    name: "results",
    status: "completed",
    conclusion: "success",
    completed_at: new Date().toISOString(),
    head_sha: process.env.GITHUB_SHA});
}

run().then(text => {
  process.exit();
}).catch(err => {
  console.dir(err);
  process.exit(1);
});
