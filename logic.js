const octokit = require('@octokit/rest')();

async function run() {
  console.log("hello " + process.env.GITHUB_TOKEN);

  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });
  
  const create = await octokit.checks.createSuite({
    owner: "larshp", 
    repo: "actions", 
    head_sha: "sdfsd"});
}

run().then(text => {
  process.exit();
}).catch(err => {
  console.dir(err);
  process.exit(1);
});
