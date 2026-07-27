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

  ________________________



let numbers = [9, 4, 9, 1, 4, 7, 1];

let unique = [...new Set(numbers)];

console.log(unique);
console.log(unique.length);
console.log(unique[0]);
console.log(unique[3]);

Output:
[9,4,1,7];
4
9
7
