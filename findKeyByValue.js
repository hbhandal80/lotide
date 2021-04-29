const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("🍷🍷 " + "Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`🍷🍷 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌ " + "Assertion Failed : " + [actual] + " !== " + [expected]);
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(key, value) {
  for (const genre in key) {
    if (key[genre] === value) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


findKeyByValue("The Expense");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);