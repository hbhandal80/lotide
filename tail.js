const assertEqual = function(actual, expected) {
  const tail = actual.slice(1, actual.length);

  console.log(tail);

};

assertEqual([5,6,7], 5);
assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");