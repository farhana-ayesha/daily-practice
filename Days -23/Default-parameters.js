Default Parameters
Function-এ argument না দিলে default value ব্যবহার করা যায়।
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
Output:
Hello Guest
আবার:
greet("Farhana");
Output:
Hello Farhana
Arrow function দিয়েও:
const greet = (name = "Guest") => `Hello ${name}`;

console.log(greet());
