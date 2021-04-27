const assertEqual = function(actual, expected) {
  
  const head = actual.slice(0, 1);
  console.log(head);
};

assertEqual([5,6,7], 5);
assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");