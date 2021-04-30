const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    //console.log("🍷🍷 " + "Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`🍷🍷 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌ " + "Assertion Failed : " + [actual] + " !== " + [expected]);
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word[word.length - 1]), ["g", "c", "t", "m", "t"]);