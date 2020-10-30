// Promise é uma function construtora que precisa receber uma function como argumento, esse argumento vai envolver a operação assíncrona que for criada. E vai receber 2 parametrod (resolve, reject).
const aPromise = new Promise((resolve, reject) => {
  const aNumber = 37
  resolve(aNumber)
  reject(aNumber)
})

// then() sempre retorna uma new Promise
aPromise
  .then(value => value) // retorna o valor
  .then(value => {
    console.log(value)
  })
  .catch(rejectValue => {
    console.log({rejectValue})
  })