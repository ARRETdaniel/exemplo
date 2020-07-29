
let num: number
let phrase = "lala"
let bool = true
let arr = [87, "dasds", bool, [], {}]
let obj = {
  lala: 9
}

const add = (n1: number, n2: number) => n1+n2

let result = add(9, 8)

function add2(n3: number, n4: number) {
  this.n3
}

const obj2 = {
  add: (n1:number, n2:number) => {}
}


//console.log(algumaCoisa)

let algumaCoisa = 9

console.log(algumaCoisa)



function makeAdder(x: number) {
  return function(y: number) {
    return x + y
  }
}

let result1 = makeAdder(5)(10)

//let result2 = result1(10)

//let result3 = result2(10)
