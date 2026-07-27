let person = {
    name: "Farhana",
    age: 29,
    city: "Khulna"
};

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

output is 
Farhana
29
Khulna


/*
Dot আর Bracket-এর পার্থক্য কী?
দুটোই একই value দেয়।
person.name
এবং
person["name"]

✅ দুটোই Output:
Farhana

তাহলে Bracket Notation কেন আছে?

ধরি,
let key = "age";
এখন যদি লিখি:
console.log(person[key]);
JavaScript আগে key-এর value বের করবে।
key = "age"
তারপর করবে:
person["age"]
Output:
29

এটাই Bracket Notation-এর আসল শক্তি।
Dot দিয়ে এটা করা যায় না
console.log(person.key);
Output:
undefined
কারণ JavaScript এখানে "key" নামে property খুঁজবে, "age" না।

*/
