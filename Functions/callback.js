// //If one function call another function after its exxecution its known as callback

function myTeacher(){
    console.log("trainer amar")
    console.log("=================")
}
function me(callback){
    console.log("student shiva")
    callback();
}


me(myTeacher)

// mostly use timeout with callback

let siva=(callback)=>{
    let stopinter= setInterval(()=>{
        console.log("hey its shiva")
     },500);
     
    setTimeout(()=>{
        clearInterval(stopinter);
        console.log("interval stops")
    },3000)
    callback();

    }

let amar=()=>{
    setTimeout(()=>{
        console.log('its amar')
    },1000)
}

siva(amar)