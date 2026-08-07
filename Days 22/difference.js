const person = {
name: "Farhana"
};

person.name = "Ayesha";

console.log(person.name);
Output: Ayesha
---

const person = {
name: "Farhana"
};

person = {
name: "Ayesha"
};
Output: error
---

let a = 10;

{
let a = 20;
console.log(a);
}

console.log(a);

Output: 20
10

---

var a = 10;

{
var a = 20;
console.log(a);
}

console.log(a);
20
20
