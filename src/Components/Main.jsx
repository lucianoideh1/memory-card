import { useState} from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"
import Scoreboard from './Scoreboard'

const Main = () => {
    const [isGame,setIsGame] = useState(false)

    function handleClick(){
        setIsGame(true)
    }

  return (
   <main>
    {isGame? 
    <div>
      <CardColection></CardColection> 
      <Scoreboard></Scoreboard>
      </div> : <Welcome handleOnClick={handleClick}></Welcome>}
    
   </main>
  )
}

export default Main