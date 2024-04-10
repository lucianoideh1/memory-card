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
      setLoading(false)
      console.log(data)
  }

  getPokemons()
 },[])
 
 useEffect(() => {
   if(pokemon.length !== 0){
     setLoading(false)
    }
  },[pokemon.length])
  


  return (
    <div className="card">
        
       {loading? "Loading" :  <div>
    <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
    <p className="specie">{pokemon.name}</p>
  </div>}
    </div>
  )
}

export default Card