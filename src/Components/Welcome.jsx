// eslint-disable-next-line react/prop-types
const Welcome = ( { onClick }) => {
  return (
    <div>
        <p>Welcome to pokemon memory card game</p>
        <p>Rules:</p>
        <ul>
            <li>Don&apos;t click on the same pokemon two times until the game ends</li>
        </ul>        
        <button onClick={onClick}>Start Game</button>
    </div>
  )
}

export default Welcome