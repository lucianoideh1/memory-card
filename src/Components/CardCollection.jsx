import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick,pokemons,setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)
    const poolSize = 8

    async function getRandomNum(){
      const max = 700
      return Math.floor(Math.random()*max)
    }
    
    useEffect(() => {
        const getPokemons = async () => {
          console.log("fetching pokemons")
          const randomNum =  await getRandomNum()
          const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
          const data = await  result.json()
          setPokemons(data)
          setLoading(false)
          console.log(data)
          console.log("game start, pokemons fetched")
        }
        getPokemons()
      },[setPokemons])

       return(
        <div>
          {loading ? 
          <div>Card collection is loading</div> 
          :   
            <Card onClick={onClick} pokemon={pokemons}></Card>
          }
        </div>
       )
  }
  export default CardCollection

  
