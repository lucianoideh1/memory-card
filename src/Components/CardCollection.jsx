import {useState, useEffect} from 'react'
import Card from "./Card"

  const CardCollection = ({ pokemons, setPokemons,score,setScore,setPage} ) => {
  
    const [loading, setLoading] = useState(true)
    const [clickedPoke,setClickedPoke] = useState([])

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

    function handleCardClick(e){
      const alt = e.target.attributes.alt
      console.log(alt)
      if(clickedPoke.includes(alt) === true){
        setPage("Defeat")
      }
      else if(clickedPoke.includes(alt) ===  false){
        console.log("clicked a card")
        setClickedPoke((prev) => {
          return [...prev,alt]
        })
        setScore({...score,current:score.current + 1})
        shuffleArray(pokemons)
      }
     }

// functions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


    const pokemonJSX =  pokemons.map( poke => {
      return(<Card  key={poke.name} onClick={handleCardClick} pokemon={poke}></Card>)
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

  
