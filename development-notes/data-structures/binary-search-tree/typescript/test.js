"use strict";

const assert = require('chai').assert;
const BinarySearchTree = require('./dist/BinarySearchTree');

const bst = new BinarySearchTree.default();

describe("binary search tree", () => {
  beforeEach(() => {
    bst.reset();
  });

  it ("should be able to put key/value pairs", () => {
    bst.put('c', 2);
  });

  it ("should be able to get a key", () => {
    bst.put('c', 2);
    bst.put('z', 1);
    bst.put('a', 8);

    assert.equal(bst.get('z'), 1);
  });

  it ("should return null on not found", () => {
    bst.put('c', 2);
   
    assert.equal(bst.get('z'), null);
  });

  it ("should be able to determine size", () => {
    bst.put('c', 2);
    bst.put('e', 2);

    assert.equal(bst.size(), 2);
  });

  it ("should update existing keys", () => {
    bst.put('c', 2);
    bst.put('c', 12);

    assert.equal(bst.get('c'), 12);
  });

  it ("should be able to find max key", () => {
    bst.put('c', 2);
    bst.put('z', 1);
    bst.put('a', 8);

    assert.equal(bst.max(), 'z');
  });

  it ("should be able to find min key", () => {
    bst.put('c', 2);
    bst.put('z', 1);
    bst.put('a', 8);

    assert.equal(bst.min(), 'a');
  });

  it ("should be able to find floor", () => {
    bst.put('c', 2);
    bst.put('z', 1);
    bst.put('a', 8);

    assert.equal(bst.floor('b'), 'a');
    assert.equal(bst.floor('c'), 'c');
  });

  it ("should find a deep floor", () => {
    bst.put('s', 2);
    bst.put('e', 1);
    bst.put('x', 8);
    bst.put('a', 8);
    bst.put('r', 8);
    bst.put('c', 8);
    bst.put('h', 8);
    bst.put('m', 8);

    assert.equal(bst.floor('g'), 'e');
  });

  it ("should delete min value", () => {
    bst.put('s', 2);
    bst.put('e', 1);
    bst.put('x', 8);
    bst.put('a', 8);
    bst.put('r', 8);
    bst.put('c', 8);
    bst.put('h', 8);
    bst.put('m', 8);

    assert.equal(bst.min(), 'a');
    bst.deleteMin();
    assert.equal(bst.min(), 'c');
    bst.deleteMin();
    assert.equal(bst.min(), 'e');
  });

  it ("should delete a value", () => {
    bst.put('s', 2);
    bst.put('e', 1);
    bst.put('x', 8);
    bst.put('a', 8);
    bst.put('r', 8);
    bst.put('c', 8);
    bst.put('h', 8);
    bst.put('m', 8);

    assert.equal(bst.size(), 8);
    assert.equal(bst.get('c'), 8);
    bst.delete('c');
    
    assert.equal(bst.get('c'), null);
    assert.equal(bst.size(), 7);
  });
});

/*
    side notes
    var a = new Array();
    a['ass'] = 'footer';
    console.log(typeof a); === object
    console.log(a.length); === 0

*/
 