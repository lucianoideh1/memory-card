import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardCollection from "./CardCollection"
import Scoreboard from './Scoreboard'
import Defeat from "./Defeat"
import Victory from "./Victory"

const Main = () => {
  // game settings or properties
    const [page,setPage] = useState("Welcome")
    const [score, setScore] = useState({current:0, best:8})
    function handleGameStart(){
        setPage("Game")
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
      <CardCollection  
                      score={score}
                      setScore={setScore}
                       pokemons={pokemons}
                       setPokemons={setPokemons} 
                       setPage={setPage}></CardCollection> 
      <Scoreboard score={score} ></Scoreboard>
    </main>
  )
 }
 else if(page === "Defeat"){
  return(
    <main>
      <Defeat></Defeat>
    </main>
  )
 }
 else if(page === "Victory"){
  return(
    <main>
      <Victory></Victory>
    </main>
  )
 }
}
export default Main