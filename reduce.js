const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((sum, number)=>sum+number, 0);
// console.log(total)



const products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 55000 },
  { name: "Headphone", price: 3000 }
];

const totalPrice = products.reduce((total, product)=>{
    return total + product.price;
},0)
// console.log(totalPrice)




const carts = [
  { name: "Phone", price: 15000, quantity: 2 },
  { name: "Headphone", price: 3000, quantity: 3 },
  { name: "Keyboard", price: 2500, quantity: 1 }
];
const totalCartPrice = carts.reduce((total, cart)=>{
    return total + (cart.price * cart.quantity)
},0)
// console.log(totalCartPrice)


const mostExpensiveProduct = carts.reduce((previous, cart)=>{
    if(previous.price<cart.price){
        return cart;
    }else{
        return previous;
    }
})
console.log(mostExpensiveProduct)