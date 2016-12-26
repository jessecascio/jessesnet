
doWork();

async function doWork() {
  let status = await apiCall();

  console.log(`Status code: ${status}`)
}

function apiCall() {
  let request = require('request');

  return new Promise ((resolve, reject) => {
    request('http://www.google.com', (error, response, body) => {
      resolve(response.statusCode);
    })
  }); 
}

