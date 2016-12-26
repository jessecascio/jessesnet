
const index = require('./../dist/index');
const event = require('./event.json');

/**
 * Mock a Lambda event
 */
const context = {
  fail: e => e,
};

index.handler(event, context, (e, m) => {
  if (e) {
    console.log('ERROR', e);
    return;
  }

  console.log('SUCCESS', m);
});
