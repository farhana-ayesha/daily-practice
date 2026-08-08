//Template Literals 
//আগে আমরা string এভাবে লিখতাম:
const name = "Farhana";
const age = 29;

console.log("My name is " + name + " and I am " + age + " years old.");
//ES6-এ অনেক সুন্দর:
const name = "Farhana";
const age = 29;

console.log(`My name is ${name} and I am ${age} years old.`);
//এখানে:
`${variable}`
//এটাকে বলে interpolation।
//Expression-ও দেওয়া যায়:
const a = 10;
const b = 20;

console.log(`Total = ${a + b}`);
Output:
Total = 30
