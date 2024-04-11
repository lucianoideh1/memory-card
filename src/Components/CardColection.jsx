import Card from "./Card"

const CardColection = ({ onClick,pokemons}) => {

return(
  <div className="card-collection">
    <Card onClick={onClick} pokemon={pokemons}></Card>
  </div>
)
}

export default CardColection