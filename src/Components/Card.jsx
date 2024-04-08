const Card = ({ pokemon}) => {
  return (
    <div className="card">
        <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
       <p className="specie">{pokemon.name}</p>
    </div>
  )
}

export default Card