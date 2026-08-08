// Spread Operator ... 
/এটা array/object copy বা combine করতে খুব বেশি ব্যবহার হয়।
const numbers1 = [1, 2, 3];

const numbers2 = [...numbers1];

console.log(numbers2);
Output:
[1, 2, 3]

//দুইটা array combine:

const a = [1, 2, 3];
const b = [4, 5, 6];

const result = [...a, ...b];

console.log(result);
Output:
[1, 2, 3, 4, 5, 6]
Object-এ:
const person = {
    name: "Farhana",
    age: 29
};

const newPerson = {
    ...person,
    country: "Bangladesh"
};

console.log(newPerson);
Output:
{
    name: "Farhana",
    age: 29,
    country: "Bangladesh"
}
