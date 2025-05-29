const maht = ((a,b,c)=>{
    return a(b,c);
})

const add = ((a,b)=>a+b);
const subtract = ((a,b)=>a-b);
const multiplication = ((a,b)=>a*b);

console.log(maht(add,1,2));
console.log(maht(subtract,3,2));
console.log(maht(multiplication,10,10));
