const getPokemonUrl = pokemonNumber => 
  `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`

const get3Pokemon = async () => {
  // faz os requeste paralelamente
  const promisePokemon1 = axios.get(getPokemonUrl(1))
  const promisePokemon4 = axios.get(getPokemonUrl(4))
  const promisePokemon7 = axios.get(getPokemonUrl(7))

  // aguarda as promies serem resolvida
  const pokemons = await Promise.all([
    promisePokemon1,
    promisePokemon4,
    promisePokemon7
  ])

  // retornar os dados das promises resolvidas
  console.log(pokemons)
}

get3Pokemon()
