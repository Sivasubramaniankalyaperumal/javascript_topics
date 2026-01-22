let qsp={

    javatrainer:2,
    webtechtrainer:1,
    sqltrainer:2,
    tsub:3,
    placementday:"monday",
    validation:"1year",

    ttrainer:function(){
        return this.javatrainer + this.webtechtrainer + this.sqltrainer
    
    }
}

console.log(qsp)
console.log(qsp.placementday)
console.log(qsp.ttrainer())
