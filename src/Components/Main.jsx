import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"

const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [pokemon, setPokemon] = useState([])   

    function handleClick(){
        setIsGame(true)
    }

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
   },[isGame])


  return (
   <main>
    {isGame? <CardColection pokemon={pokemon}></CardColection> : <Welcome handleOnClick={handleClick}></Welcome>}
    
   </main>
  )
}

export default Main