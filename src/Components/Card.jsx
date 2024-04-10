import {useState, useEffect} from "react"
const Card = () => {
  
  const [pokemon, setPokemon] = useState([])   
  const [loading, setLoading] = useState(true)


  async function getRandomNum(){
      const max = 700
      return Math.floor(Math.random()*max)
  }

 useEffect(() => {
  const getPokemons = async () => {
      const randomNum =  await getRandomNum()
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      const data = await  result.json()
      setPokemon(data)
      console.log(data)
  }

  getPokemons()
 },[])

 useEffect(() => {
  if(pokemon !== []){
    setLoading(false)
    return pokemonElement
  }
 },[pokemon])

 const pokemonElement = `<img src={pokemon.sprites.front_default} alt="pokemon sprite" />
 <p className="specie">{pokemon.name}</p>`

  return (
    <div className="card">
        
       {loading? "Loading" : pokemonElement}
    </div>
  )
}

export default Card