const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("🍷🍷 " + "Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`🍷🍷 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌ " + "Assertion Failed : " + [actual] + " !== " + [expected]);
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const count = {};
  
  for (const char of string) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

console.log(countLetters("Lighthouse in the house"));
