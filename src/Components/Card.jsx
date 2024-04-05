const Card = ({pokemon}) => {
  return (
    <div>
        <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
        {pokemon.name}
    </div>
  )
}

export default Card