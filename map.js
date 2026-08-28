// const numbers = [5, 10, 15, 20];
// const result1= numbers.map(number=>{
    // return number+10;
// })
// console.log(result1)

const numbers = [1, 2, 3, 4];

const result = numbers.map((number, index) => {
  if (index % 2 === 0) {
    return number * 2;
  }

  return number + 10;
});

// console.log(result);






// map() ব্যবহার করে নতুন একটি array বানাবে যেখানে প্রতিটি product-এর:
// name থাকবে
// category যদি "Electronics" হয় → price-এর সাথে "Premium" যোগ করবে
// অন্য category হলে → "Regular" যোগ করবে

const products = [
  { name: "iPhone", category: "Electronics", price: 120000 },
  { name: "T-Shirt", category: "Clothing", price: 1500 },
  { name: "Laptop", category: "Electronics", price: 80000 },
  { name: "Shoes", category: "Clothing", price: 4000 }
];
const result2 = products.map((product)=>{
    if(product.category==="Electronics"){
         
        return {name:product.name, type:"Premium"}
    }else{
        return {name:product.name, type:"Regular"}
    }
})
console.log(result2)