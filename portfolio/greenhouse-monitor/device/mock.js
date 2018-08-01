
const lambda = require('./index');

const event = { };
const context = { };
const cb = (error, message) => { 
  if (error) {
    console.log(`ERROR: ${error.message}`);
  } else {
    console.log(`SUCCESS: ${message}`);
  }
};

lambda.handler(event, context, cb);
