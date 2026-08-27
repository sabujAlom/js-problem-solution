
function spsepicNumbers(numbers){
    let newNumbers = [];
    for(let number of numbers){
        if(number>10 && number%5===0){
            newNumbers.push(number)
        }
    }
    return newNumbers;
}
// console.log(spsepicNumbers([12, 7, 25, 30, 18, 9, 40]))

const numbers = [12, 7, 25, 30, 18, 9, 40, 50];
const results = numbers.filter(number => number>10 && number%5===0)
// console.log(result)





//Task: এমন সব product বের করো যেগুলোর:-----------------------------------
//price ১০,০০০-এর বেশি
//এবং stock ০-এর বেশি

const products = [
  { name: "Phone", price: 15000, stock: 5 },
  { name: "Laptop", price: 55000, stock: 0 },
  { name: "Headphone", price: 3000, stock: 10 },
  { name: "Keyboard", price: 2500, stock: 0 },
  { name: "Monitor", price: 18000, stock: 3 }
];

const result = products.filter(product => product.price>10000 && product.stock>0);
// console.log(result);

const zeroStock= products.find(product=>product.stock===0)
// console.log(zeroStock)


// একই products array থেকে প্রথম product-এর index বের করো যার price 10,000-এর কম।
const lessPrice = products.findIndex(product => product.price<10000)
console.log(lessPrice)