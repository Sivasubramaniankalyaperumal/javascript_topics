// Function delaration    (Nornal function that starts with function that can use by call the function name)
function sivaNum(a,b){
    return a+b;
}

//function expression    (Function that starts with variable, wee can use the variable Name to call the function)
let sivaName = function(){
    return "hi it shiva";
}

//ArrowFunction         (it is Es6+ feature) dont use arrow function for objectCreation,constroctor)
let sivaCity =()=>{
    return "chennai";
}

console.log(sivaNum("siva",2));
console.log(sivaName());
console.log(sivaCity())