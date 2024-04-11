import { useState} from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"
import Scoreboard from './Scoreboard'

const Main = () => {
    const [isGame,setIsGame] = useState(false)
    const [score, setScore] = useState({current:0, best:8})

    function handleClick(){
        setIsGame(true)
    }

  return (
   <main>
    {isGame? 
    <div>
      <CardColection ></CardColection> 
      <Scoreboard score={score}></Scoreboard>
      </div> : <Welcome handleOnClick={handleClick}></Welcome>}
    
   </main>
  )
}

export default Main