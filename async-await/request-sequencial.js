const get3Pokemon = async () => {
  const pokemon1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const pokemon4 = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
  const pokemon7 = await axios.get('https://pokeapi.co/api/v2/pokemon/7')

  console.log(pokemon1.data)
  console.log(pokemon4.data)
  console.log(pokemon7.data)
}

get3Pokemon()