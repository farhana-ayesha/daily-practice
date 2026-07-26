Practice 1: keepNumbersAboveTen

// Input: an array of numbers
// Output: array with only the numbers greater than 10
// Returns: an array

function keepNumbersAboveTen(numbers) {
  let result = [];
  // TODO: loop এবং শুধু 10-এর চেয়ে বড় number গুলো push করো

  return result;
}

console.log(keepNumbersAboveTen([5, 12, 8, 20, 3, 15])); 
// Expected: [12, 20, 15]
___________________________


function listValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}

console.log(listValues({ name: "Sam", age: 25, city: "Dhaka" }));
// ["Sam", 25, "Dhaka"]



