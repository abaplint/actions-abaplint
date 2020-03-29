#!/bin/sh
npm install @abaplint/cli -g
abaplint -f total --outformat json --outfile /result.json
cd /
npm install @octokit/rest@16.10.0 --loglevel=error
node /logic.js
