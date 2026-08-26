// এবার Problem 2: Positive, Negative, or Zero

function checkNumber(number){
  if(number>0){
    return "Positive";
  }else if(number<0){
    return "Negative";
  }else{
    return "Zero";
  }
}
// console.log(checkNumber(0))




//Problem 3: Find the Largest Number----------------------------------------
function findLargest(num1, num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
// console.log(findLargest(10, 20))




//Problem 4: Sum of Array
function sumArray(numbers) {
    let total = 0;
    for(let number of numbers){
       total = total+number
    }
    return total;
}

console.log(sumArray([1, 2, 4, 4]))