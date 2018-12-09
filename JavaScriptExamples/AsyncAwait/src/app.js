require("@babel/polyfill");
import {getMostRecentETHData} from "./utils/dbUtils";
import {timeoutResolveSuccess, timeoutRejectError, slowAddition} from "./utils/timers";

var runAsyncTest01 = async () => {

  // Case 1: Set DB url to a valid value. Data should be returned without error.
  console.log("\n--->> Case 1: Set DB url to a valid value. Data should be returned without error.");
  console.log("--->> This is the case where data should be returned normally.");
  var url = process.env.URLEth;
  if (url===undefined || url==="") {
    console.log("Couldn't find the MongoDB url.  Try sourcing SetMongoEnv.sh prior to running.")
    return(new Error("MongoDB environment not found."));
  }
  try {
    var result = await getMostRecentETHData(url);
    console.log("Result:", result);
  }
  catch(err) {
    console.log("err:", err);
    return(new Error("Error in runAsyncTest01"));
  }
  console.log("End: Case 1.");
}

var runAsyncTest02 = async () => {

  // Case 2: Try to get data with DB URL not set.
  console.log("\n--->> Case 2: Try to get data with DB URL not set.");
  console.log("--->> This case should fail with the promise rejected and exception caught.");
  var url = "";
  try {
    var retPromise = getMostRecentETHData(url);
    console.log("retPromise:", retPromise);
    var retValue = await retPromise;
    // var retValue = await getMostRecentETHData();
    console.log("retValue:", retValue);
  }
  catch(err) {
    console.log("err:", err);
    return(new Error("Error in runAsyncTest02"));
  }
  console.log("End: Case 2.");
}

/* runTimerAsync01
 * desc: Uses setTimeout to produce a delay to test async await code.  Returns success.
 */
var runTimerAsync01 = async () => {

  var result = await timeoutResolveSuccess(1500, "Result01");
  console.log("result:", result);
}

/* runTimerAsync02
 * desc: Uses setTimeout to produce a delay to test async await code.  Returns failure.
 */
var runTimerAsync02 = async () => {

  try {
    var result = await timeoutRejectError(1000, "Result02");
    console.log("result:", result);
  }
  catch(err) {
    console.log("Error in runTimerAsync02:", err)
  }
}

/* runDoSlowMath
 * desc: Performs arithmetic (a + b) where 'a' and 'b' take a long time to compute.
  *      Uses setTimeout to simulate long running requests.
 */
var runSlowMath = async () => {
  try {
    var result = await slowAddition();
    console.log("slowAddition result:", result);
  }
  catch(err) {
    console.log("Error in runSlowMath:", err)
  }
}

//runAsyncTest01();
//runAsyncTest02();
runTimerAsync01();
runTimerAsync02();
runSlowMath();
