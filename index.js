let string1 = ")()))" // false
let string2 = "((((())))))"//false
let string3 = "()))(("//false
let string4 = "(()" //false
let string5 = "(((())))(())" // true

function parenChecker(givenString) {
  if(givenString.length % 2 !== 0){
    return false;
  }

  let parenCounter = 0;
  const stringArr = givenString.split("")

  for(let i = 0 ; i< stringArr.length;i++){

    if(stringArr[i]==="("){
      parenCounter++
    }else if(stringArr[i]===")"){
      parenCounter--
    }
    if(parenCounter === -1){
      return false
    }
  }
  return parenCounter===0;
}

console.log(parenChecker(string1))
console.log(parenChecker(string2))
console.log(parenChecker(string3))
console.log(parenChecker(string4))
console.log(parenChecker(string5))
