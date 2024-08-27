const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const compose = (functions) => {
  // return function (x) {
  //   let ans = x;
  //   for (let i = functions.length - 1; i >= 0; i--) {
  //     ans = functions[i](ans); // functions[i] is a function called with ans as an argument and the result is stored in ans ans holds the result of the last function call
  //   }
  //   return ans;
  // };

  // another way to write the above code
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
