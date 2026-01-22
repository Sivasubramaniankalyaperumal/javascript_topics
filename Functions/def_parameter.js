// a Functions parameter sets with default value is known as default parameters

function add(a,b=25){          //b is default value either you give or not it will work
    return a+b;
}

console.log(add(3,5));
console.log(add(3));

var myname = (name="siva")=>{    // here name is default parameter
    return `${name}` ;
}

console.log(myname("S`zubramanyan"));