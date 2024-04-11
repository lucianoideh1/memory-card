import Card from "./Card"

const CardColection = ({onClick}) => {
  return (
    <div className="card-colection">
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
      <Card onClick={onClick}></Card>
    </div>
  )
}

export default CardColection