import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import Card from "./Card"
const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [pokemon, setPokemon] = useState([])
    // const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    
    function handleClick(){
        setIsGame(true)
        getPokemon()
    }

    function getRandomNum(){
        const max = 700
        return Math.floor(Math.random()*max)
    }

   async function getPokemon(){
    // const randomNum =  getRandomNum()
     const result = await fetch(`https://pokeapi.co/api/v2/pokemon/torkoal`)
     const data = await result.json()
     setPokemon(data)
     console.log(data)

   }

   useEffect(() => {
    const getPokemons = async () => {
        // const randomNum =  getRandomNum()
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/torkoal`)
        const data = await  result.json()
        setPokemon(data)
        console.log(data)
    }

    getPokemons()
   },[])


  return (
   <main>
    {isGame? <Card pokemon={pokemon}></Card>: <Welcome handleOnClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main