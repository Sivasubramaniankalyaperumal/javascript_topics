function greeting(city, state){
    console.log(`Hello ${this.name} from ${city}, ${state}`)
}
const Name={ name:"siva"};

greeting("chennai","tamilNadu") //// normal 

greeting.call(Name,"neyveli","tamilnadu")   //call the object and send to func 


greeting.apply(Name, ["Che", "India"]);     //same but apply new datas


const bindedGreet = greeting.bind(Name, "Chennai", "India"); // gathering all datas in a same variable
bindedGreet();
