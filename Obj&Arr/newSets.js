let arr1= new Set(["a","b","c","c"]);  // sets never allow repeaters

console.log(arr1)
console.log("size od arr1  = "+ arr1.size)

arr1.add("d");
arr1.add("e");      
arr1.add("e");   // repeaters not allowed to add
arr1.add("e");
console.log(arr1)

arr1.delete("d")
arr1.delete("e")
console.log(arr1)

arr1.clear()      // clears all in arr
console.log(arr1);

let arr2=new Set(["a","b","c","d","e"])
let arr3=new Set(["d","e","f","g"])

let inter=arr2.intersection(arr3)    // intersection
console.log(inter)
let uni=arr2.union(arr3)              // union
console.log(uni)
let dif2=arr2.difference(arr3)        //arr2 differ value
console.log(dif2)