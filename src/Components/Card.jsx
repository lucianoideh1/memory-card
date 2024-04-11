const Card = ({ onClick,loading ,pokemon}) => {
  


  return (
    <div className="card" onClick={onClick}>
        
       {loading? "Loading" :  <div>
    <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
    <p className="specie">{pokemon.name}</p>
  </div>}
    </div>
  )
}

export default Card