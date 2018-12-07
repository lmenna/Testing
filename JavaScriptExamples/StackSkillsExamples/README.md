First step to writing JavaScript properly is to setup the environment on your machine.

1) Sample directory structure.
> cd /Users/yourusername/Documents/Development
> mkdir JavaScriptProj
> cd JavaScriptProj
> mkdir src
> mkdir test
> mkdir bin

2) In the bin directory create two files "dev" and "prod".

The "dev" file contains,
require('@babel/babel-register')
require('../src/app')

The "prod" file contains,
require("./../dist/app")

3) Now setup npm and begin installing useful packages.  If the machine doesn't have npm or node then
google "install npm".  For an ios machine "brew install node" will do it.

> npm init -y

This initializes the npm environment and creates the package.json file.

4) Setup mocha

> npm install mocha --save-dev

This installs the mocha testing tool.  Test code goes into a folder named "test".
Files in the "test" folder should be named "moduleNameTest.js" where moduleName.js contains
the code to unit test.

5) Setup chai
> npm install chai --save-dev

Assertion library.

6) Setup babel.  If you want to use modern JavaScript features like "import { ... , ... } from "xxx"; then you need Babel.

> npm install --save-dev @babel/core @babel/cli @babel/preset-env
> npm install --save-dev @babel/polyfill
> npm install --save-dev @babel/register

Edit .babelrc to include...
{
 "presets": [ "@babel/preset-env" ]
}

@babel/polyfill allows use of new JavaSCript language features
@babel/register is required for the mocha testing.

7) Edit package.json to add some commands.

For example...
"scripts": {
  "test": "mocha --require @babel/register",
  "start": "node bin/dev",
  "clean": "rm -rf dist",
  "build": "npm run clean && mkdir dist && babel src -s -d dist",
  "prod": "source SetMongoEnv.sh && npm run build && node bin/prod"
},

8) Create some source code.

> cat > src/app.js
console.log("Hello there!");
ctrl-d
> npm run prod
output: Hello there!

9) Create a empty test case.

> cat > test/emptyTest.js

import {assert} from "chai";
import {app} from "../src/app";

describe("Perform a empty test", function() {
  it("should work", () => {
    assert.equal(0, 0);
  });
});
ctrl-d
