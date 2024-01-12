/**
 * The sum of the primes below 10 is 2+3+5+7=17.
 Find the sum of all the primes below two million.(2,000,000)
 */

const isPrime = (num) => {
  // The reason why checking the Math.sqrt is a number would always be divided a small factor and a large factor(>=small factor)
  // E.g 56=7*8, 56=4*14. Math.sqrt(56)~=7.5 so we only need to check the int less than 7.5 as the small factor's range is [2,7.5]
  for (let i = 2; i <= Math.trunc(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getPrimeArray = (num) => {
  let primeArray = [];
  // 1 is not a prime
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
};
const primeArray = getPrimeArray(2000000);
const sum = primeArray.reduce((total, item) => total + item);
console.log("The sum of all the primes below two million (2,000,000) is ", sum);
