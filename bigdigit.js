const numbers = [5, 10, 15, 20, 25, 18];
const result1 = numbers.reduce((previous, number)=>{
    if(number>previous){
        return number;
    }else{
        return previous;
    }
})
// console.log(result1)

//OR-----------

let bignumber=numbers[0]
for(let number of numbers){
    if(number>bignumber){
       bignumber=number;
    }
    
}
// console.log(bignumber)