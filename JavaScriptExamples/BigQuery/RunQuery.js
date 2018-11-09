/* RunQuery.js
 * desc: Example of how to run a google BigQuery against the Ethereum dataset from JavaScript
 *
 */

// Got this using npm install --save @google-cloud/bigquery
const {BigQuery} = require('@google-cloud/bigquery');

// A hard coded query for testing.  Will return the top ten addresses for ERC721 smart contracts.
// Top meanoing the addresses with the highest transaction counts.
var query = "select contracts.address, count(1) as tx_count from ";
query += "`bigquery-public-data.ethereum_blockchain.contracts` as contracts join ";
query += "`bigquery-public-data.ethereum_blockchain.transactions` as transactions ";
query += "on (transactions.to_address = contracts.address) where ";
query += "contracts.is_erc721 = TRUE group by contracts.address order by tx_count DESC limit 10";

/* getBigQueryData(query)
 * desc: Run the BigQuery using async and await execution model.
 * param: String with the query to run.
 */
async function getBigQueryData(query)
{
  const bigquery2 = new BigQuery({
    projectId: 'eth-testing-221913',
    keyFilename: '/Users/yglm/eth-testing-221913-87aaade4d104.json'
  });

  console.log("query:", query);

  var resultSet = {
    header: {
      query: query,
      rowCount: 0,
      errorCode: 0,
      errorMsg: ""
    },
    data: []
  };
  var rowCount = 0;

  let promise = new Promise((resolve, reject) => {
    bigquery2.createQueryStream(query)
      .on('error', console.error)
      .on('data', function(row) {
        resultSet.data.push(row);
        rowCount++;
        console.log("Got row:", rowCount);
      })
      .on('end', function() {
        resultSet.header.rowCount = rowCount;
        console.log("Resolving promise with result set.");
        resolve(resultSet);
      });
    });
    let r = await promise; // wait till the promise resolves (*)
    return(resultSet);
};

/* TestQuery()
 * desc: async Wrapper function to call into getBigQueryData() and wait for the result.
 *
 */
async function TestQuery() {
  var result;
  try {
    result = await getBigQueryData(query);
  } catch(e) {
    console.log("Error:", e);
  }
  console.log("Query result:", result);
}

// Run the test.
TestQuery();

//-
// If you anticipate many results, you can end a stream early to prevent
// unnecessary processing and API requests.
//-
// bigquery2.createQueryStream(query)
//   .on('data', function(row) {
//     this.end();
// });
