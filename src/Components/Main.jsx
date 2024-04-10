import { useState} from "react"
import "../styles/main.css"
import Welcome from "./Welcome"
import CardColection from "./CardColection"

const Main = () => {
    const [isGame,setIsGame] = useState(false)

    function handleClick(){
        setIsGame(true)
    }


  return (
   <main>
    {isGame? <CardColection></CardColection> : <Welcome handleOnClick={handleClick}></Welcome>}
    
   </main>
  )
}

export default Main