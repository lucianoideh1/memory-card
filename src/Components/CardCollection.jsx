import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick,pokemons,setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)
    
    const getPokemonPool = (num) => {
      console.log(`returns ${num} pokemons`)
    }

    useEffect(() =>{
     
      const arr = [
        fetch("https://pokeapi.co/api/v2/pokemon/1"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        fetch("https://pokeapi.co/api/v2/pokemon/3"),
        fetch("https://pokeapi.co/api/v2/pokemon/4")
      ]

      Promise.all(arr)
        .then((res) => console.log(res))

    },[setPokemons])

    //       console.log("fetching pokemons")
    //       const randomNum =  await getRandomNum()
    //       const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    //       const data = await  result.json()
    //       setPokemons(data)
    //       setLoading(false)


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

  
