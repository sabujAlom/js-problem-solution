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

// console.log(sumArray([1, 2, 4, 4]))




// Problem 5: Count Even Numbers
function countEvenNumbers(numbers){
    let count = 0;
    for(let number of numbers){
        if(number%2===0){
            count = count+1
        }
    }
    return count;

}
// console.log(countEvenNumbers([1, 2, 4, 4]))


//Problem 6: Find the Smallest Number
function findSmallest(numbers){
    let smallest = numbers[0]
    for(let number of numbers){
         if(number < smallest){
            smallest=number;
         }
    }
    return smallest;
}
// console.log(findSmallest([87, 80, 99, 30]))





// Problem 7: Find the Largest Number in an Array
function findLargest(numbers){
   let bigestNumber=numbers[0];
    for(let number of numbers){
        if(number>bigestNumber){
            bigestNumber=number;
        }
    }
    return bigestNumber;
    
    
}
// console.log(findLargest([5, 8, 7, 9, 6]))






//🟢 Problem 8: Count Positive Numbers-----------------------------------------------------
 function countPositiveNumbers(numbers){
   let count = 0;
   for(let number of numbers){
    if(number>0){
        count++;
    }
   }
   return count;
   

 }
//  console.log(countPositiveNumbers([-2, 5, 7, -1, 0, 10,-5, 9, 11, 19]))



//Problem 9: Count Negative Numbers
function countNegativeNumbers(numbers){
    let count = 0;
    for(let number of numbers){
        if(number<0){
            count++;
        }
    }
    return count;
}
// console.log(countNegativeNumbers([4, 44, -8, 8, -9, 99, 75, -80]))





// Problem 10: Find the First Even Number
function findFirstEven(numbers){
    for(let number of numbers){
        if(number%2===0){
            return number;
        }
    }
    
}
// console.log(findFirstEven([3, 7, 9, 12, 8, 20]))





// Problem 11: Reverse a String---------------------------------
function reverseString(str){
   let reversed = "";
    for(let i = str.length-1; i>=0; i--){
         reversed = reversed + str[i];
    }
    return reversed;

}

// console.log(reverseString("sabuj"))


//Problem 12: Count Vowels-----------------------
function countVowels(str){
    str=str.toLowerCase()
    let count = 0;
    for(let char of str){
        if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    
    return count;
    
}
console.log(countVowels("Bangladesh"))