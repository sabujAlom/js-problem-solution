// firstColor → "Red"
// secondColor → "Green"
// thirdColor → "Blue"

const colors = ["Red", "Green", "Blue"];

const[firstColor, secondColor, thirdColor]=colors;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)





// first → 10
// third → 30
// last → 50
const numbers = [10, 20, 30, 40, 50];
const[first, ,third, , last]=numbers;
// console.log(first, third, last)





const student = {
    name: "Sabuj",
    age: 25,
    department: "CSE"
};
const {name, age}=student;
console.log(name, age)