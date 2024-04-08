const Card = (pokemon) => {
  return (
    <div>
        <img src={pokemon.pokemon.sprites.front_default} alt="pokemon sprite" />
        {pokemon.pokemon.name}
    </div>
  )
}

export default Card