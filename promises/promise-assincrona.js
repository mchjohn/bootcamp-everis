const url = "https://dog.ceo/api/breeds/image/random"
const dogImg = document.querySelector('[data-js="dog-img"')

const validateHTTPStatus = dogData => {
  // '.ok' retorna um boolean indicando se o status code está entre 200 e 299
  if (!dogData.ok) {
    throw new Error(`HTTP error, status ${dogData.status}`)
  }
  return dogData.json() // parseia para JSON e retornar uma Promise
}

const setDogImg = ({ message: url }) => {
  dogImg.src = url
  // dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
  console.log(error.message)
}

fetch(url) // faz uma requisição HTTP e retorna uma Promise
  .then(validateHTTPStatus)
  .then(setDogImg)
  .catch(handleRequestError)