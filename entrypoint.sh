#!/bin/sh
npm install abaplint -g
abaplint -f total --outformat json --outfile result.json
ls
cd /
ls
npm install @octokit/rest@16.10.0 --loglevel=error
node /logic.js
