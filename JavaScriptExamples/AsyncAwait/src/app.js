require("@babel/polyfill");
import {getMostRecentETHData} from "./utils/dbUtils";
import {timeoutResolveSuccess, timeoutRejectError, slowAddition} from "./utils/timers";
import {getExchangeData} from "./utils/getCryptoData";

const poloniexURL = "https://poloniex.com/public?command=returnTicker"; 
const coinbaseURL = "https://api.pro.coinbase.com/products"; 
const bittrexURLAll = "https://bittrex.com/api/v1.1/public/getmarketsummaries";
const hitbtcURL = "https://api.hitbtc.com/api/2/public/ticker";
const yobitBaseURL = "https://yobit.net/api/3/ticker/"


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
 * desc: Test a async failure.  Uses setTimeout to produce a delay to test async await code.  Returns failure.
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

/* runMarketDataTest()
 * desc: Queries various exchanges for market data.  First it does this sequentially using
 *       await on each request.  Next it does this in parallel awaiting on all request simultaneously
 */
var runMarketDataTest = async() => {

  console.log("Begin: runMarketDataTest");
  const startAwait = Date.now();

  try {
    let polo = await getExchangeData(poloniexURL);
    let poloTime = Date.now();
    let cb = await getExchangeData(coinbaseURL);
    let cbTime = Date.now();
    let bt = await getExchangeData(bittrexURLAll);
    let btTime = Date.now();
    let hb = await getExchangeData(hitbtcURL);
    let hbTime = Date.now();
    console.log(`Polo: ${poloTime-startAwait}  CB: ${cbTime-poloTime}  BT: ${btTime-cbTime}  HB: ${hbTime-btTime}`);
    console.log(`Time for awaiting each exchange seperately: ${hbTime - startAwait}`);
  }
  catch(err) {
    console.log(`Error getting data sequentially: ${err}`);
  }
  const endAwait = Date.now();

  const startAwaitAll = Date.now();
  console.log("Get all exchange data simultaneously.");
  try {
    let polo2 = getExchangeData(poloniexURL);
    let cb2 = getExchangeData(coinbaseURL);
    let bt2 = getExchangeData(bittrexURLAll);
    let hb2 = getExchangeData(hitbtcURL);
    await Promise.all([polo2, cb2, bt2, hb2]);
  }
  catch(err) {
    console.log(`Error getting data simultaneously: ${err}`);
  }
  const endAwaitAll = Date.now();
  console.log(`Time for awaiting all exchanges together: ${endAwaitAll - startAwaitAll}`);  
  console.log("End: runMarketDataTest");
}

//runAsyncTest01();
//runAsyncTest02();
// runTimerAsync01();
// runTimerAsync02();
// runSlowMath();
setInterval(runMarketDataTest, 10000);
