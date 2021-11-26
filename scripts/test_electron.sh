#!/usr/bin/env bash

export ELECTRON_RUN_AS_NODE=1 

./node_modules/.bin/electron ./test/support/createdb.js
./node_modules/.bin/electron ./node_modules/.bin/mocha -R spec --timeout 480000