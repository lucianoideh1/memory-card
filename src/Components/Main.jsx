import { useState, useEffect } from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"
import Scoreboard from './Scoreboard'

const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [score, setScore] = useState({current:0, best:8})

    function handleGameStart(){
        setIsGame(true)
    }

    function handleCardClick(){
      console.log("clicked a card")
    setScore({...score,current:score.current + 1})
    }

    useEffect(() => {

      function isBest(){
        if(score.current > score.best){
          setScore({...score,best : score.current})
        }
      }
    
    isBest()
    },[score])
 
    return (
   <main>
    {isGame? 
    <div>
      <CardColection onClick={handleCardClick}></CardColection> 
      <Scoreboard score={score} ></Scoreboard>
      </div> : <Welcome onClick={handleGameStart}></Welcome>}
    
   </main>
  )
}

export default Main