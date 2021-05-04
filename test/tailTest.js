const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [6,7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});


/*
const tail = require('../tail');
const assertEqual = require('../assertEqual');


assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);