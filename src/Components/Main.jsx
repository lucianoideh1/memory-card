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
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setPokemon(data)
        return (<div><img src={data.sprites.front_default}></img></div>)
    })
   }


  return (
   <main>
    {isGame? <Card pokemon={pokemon}></Card>: <Welcome onClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main