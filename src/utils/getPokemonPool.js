export default function getPokemonPool(url){
const poolSize = 4
const pokemonArr = []

async function getPokemon(){
    const result = await fetch(`${url}${Math.floor(Math.random()*700)}`)
    const data = await result.json()
    return data
}

for(let i = 0; i < poolSize;i++){
pokemonArr.push(getPokemon())
}

console.log(pokemonArr)
return pokemonArr
}