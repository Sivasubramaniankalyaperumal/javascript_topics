/*
const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let apiworked= false;

        if(apiworked){
            resolve("we got Api response");
        }
        else{
            reject("Api not response so rejected")
        }
    },500)
})

promise.then((res)=>{
    console.log(res);
});
promise.catch((err)=>{
    console.log(err)
});
promise.finally(()=>{
    console.log("its finally from promise")
});
*/





let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let Api=true;

        if(Api){
            resolve("APi responsed succesfull")
        }
        else{
            reject("Api was unable to reach")
        }
    },2000)
})

promise1.then((res)=>{
    console.log(res)
})
promise1.catch((err)=>{
    console.log(err)
})
promise1.finally(()=>{
    console.log("promise1 finished its work")
})