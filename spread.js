const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const frontBack=[...frontend, ...backend];
// console.log(frontBack)





// name এবং age আগের মতো থাকবে
//city হবে "Chattogram"
//নতুন property country: "Bangladesh" যোগ হবে
//original user object change করা যাবে না

const user = {
    name: "Sabuj",
    age: 25,
    city: "Dhaka"
};
const newUser={
    ...user,
    city:"chattogram",
    country:"Bangladesh"
}
console.log(newUser)