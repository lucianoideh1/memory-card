const Welcome = ({handleOnClick}) => {
  return (
    <div>
        <p>Welcome to pokemon memory card game</p>
        <p>Rules:</p>
        <ul>
            <li>Don&apos;t click on the same pokemon two times until the game ends</li>
        </ul>        
        <button onClick={handleOnClick}>Start Game</button>
    </div>
  )
}

export default Welcome