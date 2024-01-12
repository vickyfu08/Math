/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

// Takes around 15s
let range = 20;

// Min value of the result is range*(range-1)
let result = range * (range - 1);
let testArray = [];
for (let i = 1; i <= range; i++) {
  testArray.push(i);
}
export const canBeDividedEvenly = (value, testArray) => {
  let canBeLength = testArray.filter(
    (testValue) => value % testValue === 0
  ).length;

  return testArray.length === canBeLength;
};
do {
  result = result + 1;
} while (canBeDividedEvenly(result, testArray) === false);
console.log(
  "The smallest positive number that is evenly divisible by all of the numbers from 1 to 2 is ",
  result
);
