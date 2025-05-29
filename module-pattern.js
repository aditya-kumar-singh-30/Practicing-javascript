const counter = ()  =>{
    const count = 0;

    const increment = ()=>{
        count++;
        console.log(count);
    }

    const decrement = () =>{
        count--;
        console.log(count);
    }
    return {
        increment,
        decrement,
       
    }
}

const real = counter();

real.increment();
real.decrement();

console.log(real.count)