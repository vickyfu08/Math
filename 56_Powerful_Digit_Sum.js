/**
 * A googol (10^100) is a massive number: one followed by one-hundred zeros; 
 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.
 Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?
 */

// BigInt(added since ES11), a method for 2^53-1. Math method to BigInt is not supported
// Get sum of the string
const getSum = (numberString) => {
  let sum = 0;
  sum = numberString
    .split("")
    .reduce((total, item) => Number(total) + Number(item));
  return sum;
};

let a = 99;
let b = 99;
let max = 0;

for (let i = 2; i <= a; i++) {
  for (let x = 1; x <= b; x++) {
    let result = getSum(String(BigInt(i) ** BigInt(x)));
    if (result > max) {
      max = result;
    }
  }
}
console.log("The maximum digital sum is ", max);
