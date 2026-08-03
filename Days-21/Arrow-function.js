//Arrow function  with solving 

 //Problem 1 Solution

//দুইটি সংখ্যার যোগফল বের করো।

const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

Output:

30

//আরও ছোট করে লেখা যায়:

const add = (a, b) => a + b;

console.log(add(10, 20));

-----------

  //Problem 2 Solution

//সংখ্যা জোড় নাকি বিজোড় চেক করো।

const checkEvenOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(11));

Output:

Even
Odd

-------------  

১. Square Number

const square = (number) => {
  return number * number;
};

console.log(square(5));

Output:

25
---
  
২. Rectangle-এর Area

const area = (length, width) => {
  return length * width;
};

console.log(area(10, 5));

Output:

50
---

৩. তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টি বের করো

const largest = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(largest(10, 25, 15));

Output:

25

---


