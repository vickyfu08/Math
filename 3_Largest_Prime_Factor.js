/**
 * The prime factors of 13195 are 5,7,13 and 29.

What is the largest prime factor of the number 600851475143?
 */

// 13195
//  /\
// 5  2639
//     /\
//    7  377
//        /\
//       13 29
const getBiggest = (num) => {
  for (let div = 2; div < num; div++) {
    if (num % div == 0) {
      num /= div;
      // To start from the same value in next loop(e.g.125:5,5,5)
      div--;
    }
  }
  return num;
};
console.log(
  "The largest prime factor of the number 600851475143 is ",
  getBiggest(600851475143)
);
