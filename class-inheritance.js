class Animal{
    speak(){
        console.log("rabbit speaks");
    }
    eats(){
        console.log("rabbit eats");
    }
    walks(){
        console.log("rabbit walks");
    }
}
class rabbit extends Animal{
    hop(){
        console.log("rabbit hops");
    }
}

const rabbit1 = new rabbit();

rabbit1.hop();
rabbit1.eats();