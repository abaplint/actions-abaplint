const octokit = require('@octokit/rest')();

async function run() {
  console.log("hello " + process.env.GITHUB_TOKEN);

  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });
  
  const repo = process.env.GITHUB_REPOSITORY.split("/");
  
  const create = await octokit.checks.createSuite({
    owner: repo[0], 
    repo: repo[1], 
    head_sha: process.env.GITHUB_SHA});
}

run().then(text => {
  process.exit();
}).catch(err => {
  console.dir(err);
  process.exit(1);
});
