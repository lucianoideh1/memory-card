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
const [loading, setLoading] = useState(true)



async function getRandomNum(){
  const max = 700
  return Math.floor(Math.random()*max)
}

useEffect(() => {

const getPokemons = async () => {
  const randomNum =  await getRandomNum()
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
  const data = await  result.json()
  setPokemon(data)
  setLoading(false)
  console.log(data)
}

getPokemons()
},[])

useEffect(() => {
if(pokemons.length !== 0){
 setLoading(false)
}
},[pokemons.length])



  return (
    <div className="card-colection">
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
      <Card onClick={onClick} loading={loading}></Card>
    </div>
  )
}

export default CardColection