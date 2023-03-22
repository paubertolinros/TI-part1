function numberThree (num1, num2){
return num1 % num2 === 0 ? "true" : "false"
}

console.log(numberThree(2, 2))

function numberFour(arr) {
   return arr.map((elem, i) => elem[0].toUpperCase() + elem.slice(1))
}
console.log(numberFour(["hola", "cara", "cul"]))


function numberFive(arr) {
   return arr.reduce((accum, current) => accum + current / arr.length , 0)
}
console.log(numberFive([1, 3, 4, 5, 6]))

function numberSix(arr) {
  return arr.map(elem => elem.edad > 18)
}

function numberSeven(arr) {
  let arrNumbers = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] )
  }
}

