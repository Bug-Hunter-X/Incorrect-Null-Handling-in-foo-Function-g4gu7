function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect return value
  }
  return a + b;
}

console.log(foo(null, 1)); //Outputs 0, should throw an error or handle null differently