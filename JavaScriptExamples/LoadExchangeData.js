/*! LoadExchangeData.js
 *
 * Some examples of how to connect to an load crypto currency pricing and trade data
 * from exchanges like Poloniex.  Explores use of third party libraries to make this
 * easier.
 *
 */

var axios = require('axios');

var currencyPairsRequired = [
  "BTC_BCH",
  // "BTC_ZEC",
  // "BTC_ETH",
  // "BTC_ETC",
  // "USDT_BTC",
  // "USDT_ETH",
  // "USDT_BCH",
  "USDT_LTC"
];

async function loadPoloniexData() {
  // Kick off data load and wait for results to be returned.
  let res = await axios.get('https://poloniex.com/public?command=returnTicker');
  // At this point we can do something with the data returned.
  console.log(ProcessExchangeData(res));
}

function ProcessExchangeData(res) {
  var PoloniexData = {};
  for(i=0; i<currencyPairsRequired.length; i++) {
    const elem = currencyPairsRequired[i];
    PoloniexData[ elem ] = res.data[ elem ];
  }
  return(PoloniexData);
}

// This function will return immediately with a promise as the return type.
loadPoloniexData();
console.log("Done calling loadPoloniexData()");
