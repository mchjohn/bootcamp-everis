const isNumber = value => typeof value === 'number'

async function add (firstNumber, secondNumber) {
  if (!isNumber(firstNumber) || !isNumber(secondNumber))  {
    throw 'firstNumber e secondNumber devem ser números!'
  }

  return firstNumber + secondNumber
}

add(5, 9)
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })