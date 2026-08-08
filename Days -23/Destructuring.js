// Destructuring
//এটা খুব গুরুত্বপূর্ণ।
//ধরো:
const person = {
    name: "Farhana",
    age: 29,
    country: "Bangladesh"
};
//আগে:
const name = person.name;
const age = person.age;
const country = person.country;
ES6-এ:
const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);
Output:
Farhana
29
Bangladesh

//Array Destructuring
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
Output:
10
20
30
