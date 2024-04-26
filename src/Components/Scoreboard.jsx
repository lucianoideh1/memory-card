import PropTypes from 'prop-types'
const Scoreboard = ({score}) => {
  return (
    <div className="scoreboard" >
        Current Score: {score.current} | Best Score: {score.best}
    </div>
  )
}

Scoreboard.propTypes = {
  score: PropTypes.object,
}
export default Scoreboard