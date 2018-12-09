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
const elem = document.getElementById("elem1");
if (elem!==null) {
  elem.innerHTML = "Hello from JavaScript. ./src/app.js updated elem1's innerHTML to display this."
}
else {
  console.log("elem1 not found in the HTML");
}
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
echo "Install website development packages"
npm install --save-dev lite-server

cat <<EOF>./index.html
<!DOCTYPE html>
<html>
<head>
	<title>lite-server</title>
</head>
<body>
<p>Hello from ./index.html</p>
<p id="elem1">This is elem1</p>
</body>
<script src="./src/app.js"></script>
</html>
EOF

echo
echo "Please edit the package.json"
echo "Add the following lines in the scripts section."
echo "\"test\": \"mocha --require @babel/register\","
echo "\"start\"": "\"lite-server\""
echo
echo "Then enter \"npm start\" to run the website."
