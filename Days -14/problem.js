Problem 1: Count Negative Numbers

// Input: an array of numbers
// Output: how many numbers are negative
// Returns: a number

function countNegatives(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives([3, -5, 8, -1, -9])); // 3
