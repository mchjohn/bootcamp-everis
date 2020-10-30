const url = 'https://jsonplaceholder.typicode.com/users-sds'

const getPosts = async () => {
  try {
    const response = await axios.get(url)

  console.log(response.data)
  } catch (error) {
    console.log("Peguei você ", error)
  }
}

getPosts()

// getPosts()
//   .catch(error => {
//     console.log("Peguei você ", error)
//   })