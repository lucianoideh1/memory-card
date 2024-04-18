import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({onClick, pokemons, setPokemons} ) => {
  
    const [loading, setLoading] = useState(true)

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
        Promise.all(arr)
        .then(res => {
          Promise.all(res.map(item => {
            return item.json()
          }))
          .then((data) => {setPokemons(data)})
          .then(setLoading(false))
        })
      }

      getPokemonPool()

    },[setPokemons])


    const pokemonJSX =  pokemons.map( poke => {
      return(<Card  key={poke.name} onClick={onClick} pokemon={poke}></Card>)
    })
       return(
        <div>
          {loading ? 
          <div>Card collection is loading</div> 
          :   
         <div className='card-collection'>
          {pokemonJSX}
         </div>
          }
        </div>
       )

  }
  export default CardCollection

  
