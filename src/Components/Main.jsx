import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardCollection from "./CardCollection"
import Scoreboard from './Scoreboard'

const Main = () => {
  // game settings or properties
    const [page,setPage] = useState("Welcome")
    const [score, setScore] = useState({current:0, best:8})
    const poolSize = 8
    function handleGameStart(){
        setPage("Game")
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
  if(page === "Welcome"){
    return (
      <main>
        <Welcome onClick={handleGameStart}></Welcome>
      </main>
    )
  }
 else if(page === "Game" ){
  return(
    <main>
      <CardCollection  onClick={handleCardClick}  
                       pokemons={pokemons}
                       setPokemons={setPokemons} 
                       setPage={setPage}></CardCollection> 
      <Scoreboard score={score} ></Scoreboard>
    </main>
  )
 }
}
export default Main