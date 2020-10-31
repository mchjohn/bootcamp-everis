const url = 'https://jsonplaceholder.typicode.com/users'

// Exemplo de função sem async/await
// const getPosts = () => fetch(url)

// getPosts().then(response => {
//   console.log(response)
// })

// Exemplo de função com async/await
const getPosts = async () => {
  const response = await fetch(url)

  console.log(response)
}

getPosts()