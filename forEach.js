const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 }
];

const result1 = products.forEach(product =>{
    if(product.price>10000){
        console.log(product)
    }
  
})
// Laptop costs 80000 taka
// Mouse costs 1500 taka
// Keyboard costs 3000 taka
// Monitor costs 25000 taka