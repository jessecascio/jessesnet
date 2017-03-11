
let request = require('request')

function api(i) {
  return new Promise ((resolve, reject) => {
    
    request('http://google.com', function (e,r,b) {
      console.log('requested...', i);
      resolve(i);
    });
  
  });
}

function apis() {
  return new Promise ((resolve, reject) => {
    Promise.all([api(1),api(2),api(3),api(4),api(5)]).then((data) => {
      resolve(data);
    })
  });
}

function batch(calls) {
  return new Promise ((resolve, reject) => {
    Promise.all(calls).then((data) => {
      resolve(data);
    })
  });
}

function db() {
  return new Promise ((resolve, reject) => {
    console.log('db called...');
    resolve();
  });
}

function sync() { 
  api(1);
  api(2);
  api(3);
  api(4);
  api(5);  
  db();
}

async function asyncpromise() {
  let calls = await apis();
  db();
}

async function asynchelper() {
  //await batch([api(1), api(2)]);
  await batch([api(1),api(2),api(3),db()]);
}

asynchelper();
console.log('run off...');
