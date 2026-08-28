const prices = [5000, 1200, 80000, 3500, 15000];
const result1 = [...prices].sort((a, b)=> a-b)
const result2= [...prices].sort((a, b)=> b-a)

// console.log(result1)
// console.log(result2)




//products array-কে price অনুযায়ী ছোট থেকে বড় sort করো:
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 }
];
 


const result3 =[...products].sort((a, b)=>a.price - b.price);
console.log(result3)