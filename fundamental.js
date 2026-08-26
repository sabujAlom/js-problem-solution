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
console.log(findLargest(10, 20))