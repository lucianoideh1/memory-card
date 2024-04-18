import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick, pokemons, setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)
    
    // async function getPokemonPool(){
    //   const arr = [
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*700)}`),
    //   ]

    //   const res =  await Promise.all(arr)
    //   const data = await  Promise.all(res.map((item) =>{return item.json()}))
    //   console.log(data)
    //   setPokemons(data)
    //   setLoading(false)

    // }

    useEffect(() =>{
      async function getPokemonPool(){
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
  
        // const res =  await Promise.all(arr)
        // const data = await  Promise.all(res.map((item) => {
        //   return item.json()}))
        Promise.all(arr)
        .then(res => {
          Promise.all(res.map(item => {
            return item.json()
          }))
          .then(data => console.log(data))
          .then(data => setPokemons(data))
          .then(setLoading(false))
        })
      }

      getPokemonPool()

    },[setPokemons])

       return(
        <div>

          {loading ? 
          <div>Card collection is loading</div> 
          :   
         <div>
          {pokemons.map( poke => {
            <Card  key={poke.name} onClick={onClick} pokemon={poke}></Card>
          })}
         </div>
          }
        </div>
       )
  }
  export default CardCollection

  
