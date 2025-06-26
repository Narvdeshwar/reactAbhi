const test = [
    { name: "ashrith", age: 26 },
    { name: "ravi", age: 45 },
    { name: "ramu", age: 43 }
]




const newa = test.forEach((item) => {
    item
})
console.log(newa) // undefined
const test2 = test.map((items) => (
    items))
console.log(test2) // array