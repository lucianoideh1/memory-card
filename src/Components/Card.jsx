import PropTypes from 'prop-types';
import capitalize from "../utils/capitalize"

const Card = ({onClick, pokemon}) => {
  
    return (
      <div className="card" onClick={onClick}> 
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="specie">{capitalize(pokemon.name)}</p>
      </div>
    )
 }


 Card.propTypes = {
   onClick: PropTypes.func,
   pokemon: PropTypes.object,
   name: PropTypes.string,
   front_default: PropTypes.string,
 }
 
export default Card
