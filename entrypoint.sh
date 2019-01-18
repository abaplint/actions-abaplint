#!/bin/sh
set -x
npm install abaplint -g
pwd
ls -l
abaplint "src/**/*.*" -f json > ../result.json
ls ../
echo $GITHUB_SHA
echo $GITHUB_REPOSITORY
curl -H "Accept: application/vnd.github.antiope-preview+json" -H "Authorization: token $GITHUB_TOKEN" --request POST --data "{\"name\": \"hello world\", \"head_sha\": \"$GITHUB_SHA\"}" https://api.github.com/repos/$GITHUB_REPOSITORY/check-runs
