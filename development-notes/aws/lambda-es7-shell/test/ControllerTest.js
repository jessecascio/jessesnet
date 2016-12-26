
import chai from 'chai';
import Controller from './../src/Controller';

const assert = chai.assert;
const instance = new Controller({});

describe('Controller', () => {
  describe('#work', () => {
    it('should correctly return path and querystring', async () => {
      const params = { path: 'i am path', querystring: 'query it' };
      const response = await instance.work(params);

      assert.equal(response.path, params.path);
      assert.equal(response.querystring, params.querystring);
    });
  });
});
