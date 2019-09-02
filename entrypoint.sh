#!/bin/sh
npm install abaplint -g
abaplint --version
abaplint -f total --outformat json --outfile /result.json
cd /
ls
npm install @octokit/rest@16.10.0 --loglevel=error
node /logic.js
