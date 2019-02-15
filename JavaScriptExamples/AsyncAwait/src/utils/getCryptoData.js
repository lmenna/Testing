
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getExchangeData(_url) {

  return new Promise(async function (resolve, reject) {
    var xmlhttp = new XMLHttpRequest(),
      method = "GET",
      url = _url;

    xmlhttp.open(method, url, true);
    xmlhttp.onerror = function () {
      console.log(`** An error occurred retrieving data from ${url}`);
      reject(new Error(`** An error occurred retrieving data from ${url}`));
      return;
    };
    xmlhttp.onreadystatechange = function() {
      if (this.status===404) {
        console.log(`Error 404 querying ${url}`);
        reject(xmlhttp.responseText);
      }
      else if (this.readyState===4 && this.status===200) {
        let exchangeData = xmlhttp.responseText;
        let timeStamp = new Date();
        let returnObj = {
          timeStamp,
          exchangeData
        };
        console.log(`Resolving promise getExchangeData for ${url}`);
        resolve(returnObj);
      }
    }
    xmlhttp.send();
  });
}

export {getExchangeData};
