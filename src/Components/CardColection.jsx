import Card from "./Card"

const CardColection = ({pokemon}) => {
  return (
    <div className="card-colection">
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
        <Card pokemon={pokemon}></Card>
    </div>
  )
}

export default CardColection