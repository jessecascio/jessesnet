
var expect = require("chai").expect;
var assert = require("chai").assert;
var sinon  = require('sinon');

require('babel/register')({
    optional: ['bluebirdCoroutines']
});

// https://enterprisejs.io/lessons-learned-from-unit-testing-with-sinon-js/

var Service = require('./Service');
var service = new Service();

describe("test", function() {

  it ("should work", function() {

    service.obj = sinon.spy();

    service.work('jyes');

    assert.isTrue(service.obj.calledOnce);
    assert.isTrue(service.obj.withArgs({Val:'jyes'}).calledOnce);
  });

  it ("should work more", function() {

    var stub = sinon.stub(service, "work");

    stub.returns(5);

    var out = service.work();
      
    assert.equal(out, 5);
  });

  it ("should complex it", function() {

    service.classer = function () {
      return 2;
    };

    var out = service.complex();
      
    assert.equal(out, 9);
  });

});