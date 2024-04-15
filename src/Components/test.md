how would you go about implementing like 8 fetches?

const poolSize = 8
const pokemonArr = []

async function getPokemon(){
    const result = await fetch(url${Math.floor(Math.random(*700))})
    const data = await result.json()
    return data
}

for(let i = 0; i < poolSise;i++){
pokemonArr.push(getPokemon())
}

console.log(pokemonArr)