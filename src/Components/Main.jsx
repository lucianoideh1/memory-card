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
    const randomNum =  getRandomNum()
     const result = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
     const data = result.json()
     setPokemon(data)
   }

   useEffect(() => {
    const getPokemons = async () => {
        const randomNum =  getRandomNum()
        const result = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        const data = result.json()
        setPokemon(data)
    }

    getPokemons()
   },[])


  return (
   <main>
    {isGame? <Card pokemon={pokemon}></Card>: <Welcome onClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main