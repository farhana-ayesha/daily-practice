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

------------+-----------------------+++----+

  Problem 2: Keep Only Words Starting With a Letter

  // Input: an array of words, a starting letter
// Output: array of words that start with that letter
// Returns: an array

function wordsStartingWith(words, letter) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) {
      result.push(words.[i]);
    }
  }
  return result;
}

console.log(wordsStartingWith(["apple", "banana", "avocado", "grape"], "a"));
// ["apple", "avocado"]
