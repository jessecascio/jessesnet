
// place in src/test dir
// mocha --require ts-node/register --recursive src/test/Executor.spec.ts

import * as chai from 'chai';
import Executor from './../Executor';

const assert = chai.assert;
describe('Executor', () => {

  it ('should get an instance', () => {
    const instance = Executor.fixedPool(2);
    assert.isTrue(typeof instance === "object");
  });
  
});
