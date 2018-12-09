#!/bin/bash
echo "Create directories"
mkdir src
mkdir test
mkdir bin
echo "Create dev and prod config files in bin"
cat <<EOF >./bin/dev
require("./../dist/app")
EOF
cat <<EOF >./bin/prod
require("./../dist/app")
EOF
echo "Initialize node package manager (npm) with default settings."
npm init -y
cp package.json package.json.bak
echo "Install Mocha for unit testing"
npm install mocha --save-dev
echo "Install chai for assertion library"
npm install chai --save-dev
echo "Install Babel"
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev @babel/polyfill
npm install --save-dev @babel/register
cat <<EOF >.babelrc
{
 "presets": [ "@babel/preset-env" ]
}
EOF
echo "Create a sample app.js"
cat <<EOF >./src/app.js
console.log("Hello there!");
EOF
echo "Create an sample unit test"
cat <<EOF >./test/emptyTest.js

import {assert} from "chai";
import {app} from "../src/app";

describe("Perform a empty test", function() {
  it("should work", () => {
    assert.equal(0, 0);
  });
});
EOF
echo
echo "Please edit the package.json"
echo "Add the following lines in the scripts section."
echo "\"test\": \"mocha --require @babel/register\","
echo "\"start\": \"node bin/dev\","
echo "\"clean\": \"rm -rf dist\","
echo "\"build\": \"npm run clean && mkdir dist && babel src -s -d dist\","
echo "\"prod\": \"source SetMongoEnv.sh && npm run build && node bin/prod\""
