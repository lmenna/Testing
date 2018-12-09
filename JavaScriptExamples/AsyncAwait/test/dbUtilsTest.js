import "@babel/polyfill";
import {assert, expect} from "chai";
// npm i chai-as-promised --save-dev
require('chai')
  .use(require('chai-as-promised'))
  .should();
//import { MongoClient } from 'mongodb';
import {getMostRecentETHData} from "../src/utils/dbUtils";

describe("See if MongoDB environment variable are set.", function(){
  it("should return a secret URL to connect to the DB", function() {
    var url = process.env.URLEth;
    assert.exists(url);
  });
});

describe("MongoDB see if recent data can be queried", function(){

  it('Should return data from a valid query', async () => {
    var url = process.env.URLEth;
    const result = await getMostRecentETHData(url);
    assert.isAtLeast(result.length, 1);
  });
});

describe("MongoDB see if recent data can be queried", function(){
  it("Should return specific data from a valid query", async function() {
    var url = process.env.URLEth;
    const result = await getMostRecentETHData(url);
    expect(result[0]).to.have.property("_id");
  });
});

describe("MongoDB see if recent data can be queried", function(){
  it("Specific data without await.", function() {
    var url = process.env.URLEth;
    const result = getMostRecentETHData(url);
    return Promise.all([
      result.should.eventually.be.fulfilled,
      result.should.eventually.be.a('array'),
      result.should.eventually.have.length(1)
    ]);
  });
});

describe("MongoDB query should fail gracefully is we specify a bad DB URL", function(){
  it("should fail with the correct error message", async function() {
    var url = "";
    var result = await getMostRecentETHData(url).should.be.rejectedWith("MongoDB url not set in the environment.");
    var result = await getMostRecentETHData(url).should.be.rejected;
  });
});

describe("MongoDB query should fail gracefully is we specify a bad DB URL", function(){
  it("should fail but not checking the error", async function() {
    var url = "";
    var result = await getMostRecentETHData(url).should.be.rejected;
  });
});
