import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick,pokemons,setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)
    
    const getPokemonPool = (num) => {
      console.log(`returns ${num} pokemons`)
    }

    useEffect(()=>{
      const fetchArr = [
        fetch("https://pokeapi.co/api/v2/pokemon/1"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        fetch("https://pokeapi.co/api/v2/pokemon/3"),
        fetch("https://pokeapi.co/api/v2/pokemon/4"),
        fetch("https://pokeapi.co/api/v2/pokemon/5"),
        fetch("https://pokeapi.co/api/v2/pokemon/6"),
        fetch("https://pokeapi.co/api/v2/pokemon/7"),
        fetch("https://pokeapi.co/api/v2/pokemon/8")
      ]
  
      Promise.all(fetchArr)
      .then(data => data.json())
      .then(data => console.log(data))
      
    },[])

    // useEffect(() => {
    //     const getPokemons = async () => {
    //       console.log("fetching pokemons")
    //       const randomNum =  await getRandomNum()
    //       const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    //       const data = await  result.json()
    //       setPokemons(data)
    //       setLoading(false)
    //       console.log(data)
    //       console.log("game start, pokemons fetched")
    //     }
    //     getPokemons()
    //     getPokemonPool(8)

    //   },[setPokemons])

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

  
