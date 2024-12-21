function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); //More appropriate error handling
  }
  return a + b;
}

//Alternative Solution: using default values
function foo2(a = 0, b = 0) {
    return a + b; // Uses default values if a or b is null or undefined
}

console.log(foo2(null, 1)); //Outputs 1
console.log(foo2(1, null)); //Outputs 1
console.log(foo2(null, null)); //Outputs 0

console.log(foo(1,2)); // throws an error if null is passed