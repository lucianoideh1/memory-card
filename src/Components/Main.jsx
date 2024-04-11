import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"
import Scoreboard from './Scoreboard'

const Main = () => {
  // game settings or properties
    const [isGame,setIsGame] = useState(false)
    const [score, setScore] = useState({current:0, best:8})
    const poolSize = 8
    function handleGameStart(){
        setIsGame(true)
    }

    function handleCardClick(){
     console.log("clicked a card")
     setScore({...score,current:score.current + 1})
    // shuffleArray(pokemon)
    }
// check best score 
    useEffect(() => {

      function isBest(){
        if(score.current > score.best){
          setScore({...score,best : score.current})
        }
      }
    
    isBest()
    },[score])
// functions
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
//pokemon getter and setter 

const [pokemons,setPokemons] = useState([])
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
  setPokemons(data)
  setLoading(false)
  console.log(data)
}

getPokemons()
},[])

useEffect(() => {
if(pokemons.length !== 0){
 setLoading(false)
}
},[pokemons.length])

    return (
   <main>
    {isGame ?
    <div>
      <CardColection onClick={handleCardClick} loading={loading} pokemon={pokemons}></CardColection> 
      <Scoreboard score={score} ></Scoreboard>
      </div> : <Welcome onClick={handleGameStart}></Welcome>}
    
   </main>
  )
}

export default Main