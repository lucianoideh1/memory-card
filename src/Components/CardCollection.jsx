import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick,pokemons,setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)
    
    const getPokemonPool = (num) => {
      console.log(`returns ${num} pokemons`)
    }

    useEffect(() =>{
     
      const arr = [
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
      ]

      Promise.all(arr)
        .then((res) => {
          Promise.all(res.map((item) =>{
           return item.json()
          }))
          .then(data => console.log(data))
        })

    },[])

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

  
