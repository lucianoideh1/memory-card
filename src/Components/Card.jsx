const Card = (props) => {
  const {onClick, pokemon} = props
  
    return (
      <div className="card" onClick={onClick}> 
      <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
      <p className="specie">{pokemon.name}</p>
      </div>
    )
 }


export default Card