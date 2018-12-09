#!/bin/sh
npm install abaplint -g
pwd
ls -l
abaplint "src/**/*.*"
