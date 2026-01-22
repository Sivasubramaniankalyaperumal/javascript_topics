//it is a function that used to  store object values
//we use this keywords to acces  the  other value in same object
//key(), value(), entries(), assign()

let qsp={
    webtech:"amarjeet",
    java:"shambu",
    sql:"ithihas",
    manual:"kokila",
}

console.log(Object.keys(qsp))
console.log(Object.values(qsp))
console.log(Object.entries(qsp))

let exqsp={
    exsql:"vijay",
    exmanual:"ithihas",
}

let fullqsp=Object.assign(exqsp,qsp)
console.log(fullqsp)



let bank={
    balance:1000,
    debit:function(amount){
        return this.balance -=amount;
    },
    credit:function(amount){
        return this.balance +=amount;
    }
}

console.log(bank.debit(223))
console.log(bank.credit(533))

