import { useState } from "react"
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

    //doing the fetch without await and also disconected from the app(which means without useEffect)
     fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setPokemon(data)
    })
   }

//    useEffect(()=>{
//     getPokemon()
//    },[getPokemon])

  return (
   <main>
    {isGame? <Card pokemon={pokemon}></Card>: <Welcome onClick={handleClick}></Welcome>}
   </main>
  )
}

export default Main