import {useEffect} from 'react'
import Card from "./Card"

  function CardCollection(props){
    
  useEffect(() => {
    const checkIfPokemons = () => {
      if(props.pokemon.length < 0){
        return(<div>No Pokemons fetched...</div>)
      }
      else if(props.pokemon.length > 0){
        return(
          props.pokemon.map( poke => {
            <Card pokemons={poke} onClick={props.onClick}></Card>
          })
          )
        }
      }
      checkIfPokemons()
      // if props.pokemon.length < 0 return no pokemons fetched
      // else if props.pokemon.length > 0 return pokemon.map(poke => card pokemon= poke)
    },[props])
    
  }
  export default CardCollection