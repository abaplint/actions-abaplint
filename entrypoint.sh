#!/bin/sh
npm install abaplint -g
abaplint --version
abaplint "src/**/*.*" -f total
abaplint "src/**/*.*" -f json > /result.json
cd /
npm install @octokit/rest@16.10.0 --loglevel=error
node /logic.js
