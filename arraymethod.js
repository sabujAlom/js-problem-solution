const students = [
  { name: "Rahim", marks: 85, passed: true },
  { name: "Karim", marks: 32, passed: false },
  { name: "Hasan", marks: 70, passed: true },
  { name: "Jamal", marks: 45, passed: true }
];
// অন্তত একজন student কি 80+ marks পেয়েছে?----------------------
const result1 = students.some(student=>student.marks>80)
console.log(result1)



// সব student কি pass করেছে?-----------------------------------------
const result2 = students.every(student=>student.passed=== true)
console.log(result2)



//এমন কোনো student আছে কি, যে passed: true কিন্তু তার marks 50-এর কম?--------------------
const result3= students.some(student=>student.passed=== true && student.marks<50)
console.log(result3)