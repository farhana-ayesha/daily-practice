
// Module 13: Basic Problem Solving with JavaScript
// Solutions
// ============================================

// ----------  Hot, Cold, or Normal ----------
// Input: a number
// Output: "Hot", "Cold", or "Normal"
// Returns: a string
function checkTemperature(temp) {
  if (temp >= 30) {
    return "Hot";
  } else if (temp <= 15) {
    return "Cold";
  } else {
    return "Normal";
  }
}

console.log(checkTemperature(35)); // "Hot"
console.log(checkTemperature(10)); // "Cold"
console.log(checkTemperature(20)); // "Normal"


// ---------- Reverse a Number ----------
// Input: a number
// Output: the number with digits reversed
// Returns: a number
function reverseNumber(num) {
  let str = num.toString();
  let reversedStr = str.split("").reverse().join("");
  return Number(reversedStr);
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(7));    // 7


// ---------- Product of Digits ----------
// Input: a number
// Output: product of its digits
// Returns: a number
function productOfDigits(num) {
  let str = num.toString();
  let total = 1;
  for (let i = 0; i < str.length; i++) {
    total = total * Number(str[i]);
  }
  return total;
}

console.log(productOfDigits(123));  // 6
console.log(productOfDigits(4040)); // 0


// ---------- Odd Numbers Up To N ----------
// Input: a number
// Output: array of odd numbers from 1 to n
// Returns: an array
function getOddNumbers(n) {
  let odds = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOddNumbers(10));
// [1, 3, 5, 7, 9]


// ---------- Count Vowels ----------
// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("javascript")); // 3


// ----------Remove First and Last Character ----------
// Input: a string
// Output: the string without its first and last character
// Returns: a string
function removeFirstAndLast(str) {
  return str.slice(1, -1);
}

console.log(removeFirstAndLast("hello")); // "ell"


// ---------- Check for a Palindrome ----------
// Input: a string
// Output: true or false
// Returns: a boolean
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false


// ------- Find the Shortest Word in a Sentence ----------
// Input: a sentence (string)
// Output: the shortest word
// Returns: a string
function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
}

console.log(findShortestWord("JavaScript is a fun language")); // "a"


// -------- Find the Second Smallest Number ----------
// Input: an array of numbers
// Output: the second smallest number
// Returns: a number
function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 8, 20, 15])); // 8


// ---------Count Multiples of Three ----------
// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number
function countMultiplesOfThree(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // 3


// ---------- Average of All Numbers ----------
// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
function averageOfArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

console.log(averageOfArray([2, 4, 6])); // 4


// ---------- Keep Only Even Numbers ----------
// Input: an array of numbers
// Output: array with only even numbers
// Returns: an array
function keepEvenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // [8, 0]


// --------- List an Object's Keys ----------
// Input: an object
// Output: array of the object's keys
// Returns: an array
function listKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// ["name", "age", "city"]


// ---------Get a Value or a Default ----------
// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
function getValueOrDefault(obj, key, defaultValue) {
  if (key in obj) {
    return obj[key];
  } else {
    return defaultValue;
  }
}

let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));        // 25
console.log(getValueOrDefault(person, "grade", "N/A"));  // "N/A"


// ---------- Long Words + Count ----------
// Input: an array of words, a length threshold
// Output: array of words longer than the threshold
// Returns: an array
function getWordsLongerThan(words, minLength) {
  let longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minLength) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

// Input: an array
// Output: the number of elements in the array
// Returns: a number
function countArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}

let words = ["cat", "elephant", "dog", "hippopotamus", "ox"];
let longWords = getWordsLongerThan(words, 3);
let total = countArray(longWords);

console.log(longWords); // ["elephant", "hippopotamus"]
console.log(total);     // 2


// ============================================
// 13-10: Final Homework Set
// ============================================

// ---------- Perfect Square Checker ----------
// Input: a number
// Output: true or false
// Returns: a boolean
function isPerfectSquare(num) {
  let root = Math.sqrt(num);
  return Number.isInteger(root);
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false


// ----------Reverse the Word Order ----------
// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = words.reverse();
  return reversed.join(" ");
}

console.log(reverseWords("hello world")); // "world hello"


// ---------- Remove Duplicate Values from an Array ----------
// Input: an array of numbers
// Output: array with duplicates removed
// Returns: an array
function removeDuplicates(numbers) {
  let unique = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


// ----------Invert an Object ----------
// Input: an object (values are unique)
// Output: a new object with keys and values swapped
// Returns: an object
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    let value = obj[key];
    inverted[value] = key;
  }
  return inverted;
}

console.log(invertObject({ a: 1, b: 2, c: 3 }));
// { 1: "a", 2: "b", 3: "c" }
