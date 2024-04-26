import PropTypes from 'prop-types';
const Welcome = ({onClick}) => {
  return (
    <div>
        <p>Welcome to pokemon memory card game</p>
        <p>Rules:</p>
        <ul className="rules">
            <li>Don&apos;t click twice on the same pokemon </li>
        </ul>        
        <button className="start-game " onClick={onClick}>Start Game</button>
    </div>
  )
}

Welcome.propTypes = {
  onClick: PropTypes.func,
}
export default Welcome