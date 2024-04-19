import capitalize from "../utils/capitalize"

const Card = (props) => {
  const {onClick, pokemon} = props
  
    return (
      <div className="card" onClick={onClick}> 
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="specie">{capitalize(pokemon.name)}</p>
      </div>
    )
 }


export default Card