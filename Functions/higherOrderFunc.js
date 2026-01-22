// higher order function are used to do array/object the task faster

//map      it do tast to every element in the array or object
var arr=[1,2,3,4,5,6,7]

let arr1= arr.map(num=>num*num)
console.log(arr1)
console.log("========================")

let qsp=["sz","siva","siva2","siva3"]
let no_qsp= qsp.map((val,index)=>`${index+1}:${val}`)
console.log(no_qsp)

let n=qsp.map((val,index)=>`${index+2}:${val}`)
console.log(n)
console.log("========================")
//reduce     it is used to reduce the value of all element in the array to single value

let value=[1,2,3,4,5]
let svalue= value.reduce((acc,total)=>acc+total,0)
console.log(svalue)

let n1=value.reduce((acc,total)=>acc*total,1)
console.log(n1)
console.log("========================")

// filter  it is used to filter the array or object

let num=[1,2,3,4,5,6,7,8,9]
let even=num.filter((num)=>num % 2==0)
console.log(even)
console.log("========================")

//forEach          it is similar to map but it do the xecution one by one element
                // it is used to perferm a task on array/

let no=[1,32,4,5,6]
let each=no.forEach((num)=>{console.log(num*num)})
console.log(each)

let rec=["sz","siva","siva2","siva3"]
let each2=rec.forEach((num,index)=>{console.log(`${index+1}:${num}`)})
console.log(each2)