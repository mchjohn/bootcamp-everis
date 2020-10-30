const apiKey = { key: 'ca500394-8cd0-41d3-8926-f6f01e6b50eb' }

const url = `
  https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}
`
const divCoins = document.getElementById("coins")

const validateHTTPStatus = coinData => {
  if (!coinData.ok) {
    throw new Error(`Erro ao executar request: ${coinData.status}`)
  }

  return coinData.json()
}

const setCoinData = api => {
  let text = ""

  for (let i = 0; i < 10; i++) {
    text = text + `
      <div class="media">
        <img src="coin.png" class="align-self-center mr-3" alt="coin" "width="100" height="60">
        <div class="media-body">
          <h5 class="mt-2">${api.data[i].name}</h5>
          <p>${api.data[i].symbol}</p>
          <p>${api.data[i].first_historical_data}</p>
        </div>
      </div>
    `

    divCoins.innerHTML = text
  }
}

fetch(url)
  .then(validateHTTPStatus)
  .then(setCoinData)
  .catch(error => {
    console.log(error.message)
  })