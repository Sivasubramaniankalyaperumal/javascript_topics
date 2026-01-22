(function name(){
    console.log("siva")
})();
//this IIFE used for imediate function call or api request to happen immediately

(()=>{
    console.log("this is siva2")
})();


(function(name){
    console.log("hello",name);
})("shiva")


const num=(function(){
    return 10
})();

console.log(num)
