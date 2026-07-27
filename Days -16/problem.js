let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(numbers)];

console.log(unique);

Output: [1,2,3,4,5]


---

let fruits = [
"Apple",
"Mango",
"Apple",
"Orange",
"Mango"
];

let unique = [...new Set(fruits)];

console.log(unique);
Output: [ Apple,Mango, Orange]
--------------------
  
  let numbers = [7, 7, 2, 5, 2, 9];

let unique = [...new Set(numbers)];

console.log(unique.length); // 4 
console.log(unique[2]);     // 5 

  
