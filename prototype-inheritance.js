const animal = {
    eats: true,
    walk(){
        console.log("animal runs")
    }
};

const rabbit = {
    jumps:true
}

rabbit.__proto__ = animal;

console.log(rabbit.eats);

rabbit.walk();