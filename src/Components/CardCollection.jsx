import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick,pokemons,setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)

    async function getRandomNum(){
      const max = 700
      return Math.floor(Math.random()*max)
    }
    
    useEffect(() => {
        const getPokemons = async () => {
          console.log("fetching pokemons")
          // const randomNum =  await getRandomNum()
          const result = await fetch(`https://pokeapi.co/api/v2/pokemon/froakie`)
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
          {loading ? <div>Card collection is loading</div> : <div>Card collection is ready</div> }
        </div>
       )
       

  }
  export default CardCollection

  
