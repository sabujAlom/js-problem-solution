const numbers = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = numbers;
// console.log(first);
// console.log(second);
// console.log(remaining);


function multiplyAll(...numbers){
   let total=1;
    for(let number of numbers){
       total = total*number
    }
    return total;

}
console.log(multiplyAll(4, 6, 2))