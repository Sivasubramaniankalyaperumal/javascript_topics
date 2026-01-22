// Rest operator is used when there are n number of parameter need to pass

function add(...rest){
    return rest.reduce((acc,total)=>acc+total,0);
}

let a=[1,2,3,4,5,6]
console.log(add(...a))

// spread operator used to spread the value of 2 Arr value into single

let arr1=[2,4,6,8]
let arr2=[1,3,5,7,9]

let arr3=[...arr1,...arr2] // spread operator
console.log(arr3)