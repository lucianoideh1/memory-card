import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [pokemons, setPokemons] = useState([])
    // const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    
    function handleClick(){
        setIsGame(true)
        getPokemons()
    }

    function getRandomNum(){
        const max = 700
        return Math.floor(Math.random()*max)
    }

   async function getPokemons(){
    const randomNum =  getRandomNum()
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setPokemons(data)
        return (<div><img src={data.sprites.front_default}></img></div>)
    })
   }


  return (
   <main>
    {isGame? "Game is on": <Welcome onClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main