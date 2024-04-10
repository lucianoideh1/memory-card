import { useState,useEffect} from 'react'
const Scoreboard = () => {

  const [score, setScore] = useState({current:0,best:8})

  function handleClick ()  {
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
    <div className="scoreboard" onClick={handleClick}>
        Current Score: {score.current} | Best Score: {score.best}
    </div>
  )
}

export default Scoreboard