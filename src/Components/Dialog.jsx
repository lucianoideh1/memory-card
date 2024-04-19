const Dialog = (props) => {
  return (
    <dialog>
        <h1>{props.text}</h1>
        <button onClick={(e) => e.target.close() }>Restart</button>
    </dialog>
  )
}

export default Dialog