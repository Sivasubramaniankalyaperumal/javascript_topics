//Map its a data structure used to create new object in variable reference
let person= new Map;

person.set("name","siva")
person.set("id",26)
person.set("city","chennai")

console.log(person.get("name"))
console.log(person)

let person2= new Map([      //we can also addd val like this
    ["sz",1],
    ["siva",2],
    ["siva zubra",3]
]);
console.log(person2)
person2.set("sathya dev",4)
console.log(person2)