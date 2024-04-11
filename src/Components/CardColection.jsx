import { useState, useEffect } from 'react'
import Card from "./Card"

const CardColection = ({ onClick }) => {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const [pokemons,setPokemons] = useState([])

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