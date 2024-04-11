// import { useEffect} from 'react'
const Scoreboard = ({score}) => {

  

  // function handleClick ()  {
  //   setScore({...score,current:score.current + 1})
  // }
 
  // useEffect(() => {

  //   function isBest(){
  //     if(score.current > score.best){
  //       setScore({...score,best : score.current})
  //     }
  //   }
  
  // isBest()
  // },[score])
  return (
    <div className="scoreboard" 
    // onClick={handleClick}
    >
        Current Score: {score.current} | Best Score: {score.best}
    </div>
  )
}

export default Scoreboard