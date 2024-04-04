import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [pokemons, setPokemons] = useState([])
    // const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    
    function handleClick(){
        setIsGame(true)
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((result) => {
            return result.json()
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        })
    },[])

  return (
   <main>
    {isGame? "Game is on": <Welcome onClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main