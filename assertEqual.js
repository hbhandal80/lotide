const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("🍷🍷 " + "Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`🍷🍷 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌ " + "Assertion Failed : " + [actual] + " !== " + [expected]);
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hervinder", "Bhandal");
assertEqual("Vancouver", "Vancouver");
assertEqual(21, 15);