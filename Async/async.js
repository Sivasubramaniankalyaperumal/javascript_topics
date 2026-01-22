/*
let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let Api=true;

        if(Api){
            resolve("Api responsed succesfull")
        }
        else{
            reject("Api was unable to reach")
        }
    },3000)
})

promise
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    .finally(()=>console.log("promise 1 finished its work"))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// for async/await use either promise.then.catch.finally and async await, we can use both but it not good practice
async function connect() {
    let result= await promise
    console.log(result)
}

connect()  */

let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        apiStatus=true;

        if(apiStatus){
            resolve("it working")
        }
        else{
            reject("it not work")
        }
    },2000)
})

async function connector() {      // this is good practice
    try{
        let result= await promise2
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
    finally{
        console.log("connection successful")
    }
}

connector()