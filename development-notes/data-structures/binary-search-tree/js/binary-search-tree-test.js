
var expect = require("chai").expect;
var tree   = require("./binary-search-tree.js");
var depth  = require("./depth-pre-order.js");

describe("binary search tree", function() {

    it ("should accept items at head", function(){
    	tree.push(123);
    	tree.push(345);
    	tree.push(835);
    	tree.push(543);
    });

    it ("should be iteratable", function(){
    	depth.iterate(tree);
    	expect(depth.read()).to.equal(123);
    	depth.iterate(tree);
    	expect(depth.read()).to.equal(345);
    	depth.iterate(tree);
    	expect(depth.read()).to.equal(835);
    	depth.iterate(tree);
    	expect(depth.read()).to.equal(543);
    });

});
