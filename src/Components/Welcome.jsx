const Welcome = ({handleOnClick}) => {
  return (
    <div>
        <p>Welcome to pokemon memory card game</p>
        <p>Rules:</p>
        <ul className="rules">
            <li>Don&apos;t click twice on the same pokemon </li>
        </ul>        
        <button className="start-game" onClick={handleOnClick}>Start Game</button>
    </div>
  )
}

export default Welcome