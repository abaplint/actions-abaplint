#!/bin/sh
set -x
npm install abaplint -g
pwd
ls -l
abaplint "src/**/*.*"
echo $GITHUB_SHA
echo $GITHUB_REPOSITORY
curl -H "Accept application/vnd.github.antiope-preview+json" -H "token foo" https://api.github.com/repos/$GITHUB_REPOSITORY/check-runs
