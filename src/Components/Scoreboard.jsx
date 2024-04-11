// import { useEffect} from 'react'
const Scoreboard = ({score}) => {
  return (
    <div className="scoreboard" >
        Current Score: {score.current} | Best Score: {score.best}
    </div>
  )
}

export default Scoreboard