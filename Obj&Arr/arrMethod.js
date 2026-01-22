//array method are build-in-function that used to do some specific tasks

let arr=[1,2,3,4,5,6,7] 
let arr2=["sz","siva","siva zubra"]
console.log(arr2)

let size=arr.length;
console.log(size)

let string=arr.toString()
console.log(string)

let where=arr.at(4)
console.log(where)

let joining=arr.join("--")// join everything in an array and set with given( - or " " or arr)  inbetween each element
console.log(joining)

arr2.pop()                    //remove last element
console.log(arr2)

arr2.push("sathya dev")       ///adding last element
console.log(arr2)

arr.shift()              //remove first element
console.log(arr)

arr.unshift(0.1)        ///adding first element
console.log(arr)

let takeout=arr2.pop()        
console.log(takeout)

let takout=arr2.push("222","sivaa") /// if we put that value then its show lenght
console.log(takout)


Array.isArray(arr2) //to check it it array or not

let arr3= arr.concat(arr2)       // to combine both arr
console.log(arr3)
let arr4= [...arr,...arr2]       //by using spread operator
console.log(arr4)


arr.copyWithin(4,0,3)       //start rpeat at 4, of 0-3 index value
console.log(arr)

let dumarr=[[11,2],[41,5],[13,54]]
let flatted=dumarr.flat()
console.log(flatted)

let a=[10,20,30,40,50,60,70,80]
let siced=a.slice(2,5)          //cut the part 2-5
console.log(siced)
console.log(a)

let piced=a.splice(1,2,"hi",11,"2k")       // cut the part 1-2 and replce with anything
console.log(piced)
console.log(a)
 