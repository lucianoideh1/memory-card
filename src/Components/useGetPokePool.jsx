import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import "../styles/cardcollection.css"
import Card from "./Card"
  
const useGetPokePool = () => {

  const [state,setState] = useState(null)
  const [err,setErr] = useState(null)
  const [loading,setLoading] = useState(true)
  
    useEffect(() => {
        fetch('url')
        .then((response) => {
            if(response.status >= 400){
                throw new Error("server error")
            }
            return response.json()
        })
        .then(response => setState(response))
        .catch(error  => setErr(error))
        .finally(()=> setLoading(false))
    }, [])
  
    return { state, err, loading }
}


  const CardCollection = ({ pokemons, setPokemons,score,setScore,setPage} ) => {
  
    const { state, err, loading} = useGetPokePool()

    const [clickedPoke,setClickedPoke] = useState([])
    const [gameResult,setGameResult] = useState("Playing")
    useEffect(() =>{
      async function getPokemonPool(){
        const arr = [
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*699)+1}`),
         
        ]
        Promise.all(arr)
        .then(res => {
          if(res.status >= 400){
            throw new Error('server error')
          }
          Promise.all(res.map(item => {
            return item.json()
          }))
          .then((data) => {setPokemons(data)})
          .catch(error => setErr(error))
          .then(setLoading(false))
        })
      }

      getPokemonPool()
      const cleanPokemon = () => setPokemons([])

      return cleanPokemon
    },[setPokemons])

    useEffect(()=>{
     function checkVictory(){
      const { current } = score
        if(current >= 8){
          // setPage("Victory")
          setGameResult("Victory")
          console.log("you won")

        }
      }
      checkVictory()
    },[score, setPage])

    useEffect(()=>{
      const modalWin = document.querySelector("#modal-win")
      const modalLose = document.querySelector("#modal-lose")
      const checkGameResult = () =>{
        if(gameResult === "Victory"){
          modalWin.showModal()
        }
        else if(gameResult === "Defeat"){
          modalLose.showModal()
        }
      }
      checkGameResult()
    },[gameResult])

    function handleCardClick(e){
      const alt = e.target.attributes.alt.value
      console.log(alt)
      if(clickedPoke.includes(alt) === true){
        // setPage("Defeat")
        setGameResult("Defeat")
        console.log("you lost")
        
      }
      else if(clickedPoke.includes(alt) ===  false){
        console.log("clicked a card")
        setClickedPoke((prev) => {
          return [...prev,alt]
        })
        console.log(`clicked pokemons: ${clickedPoke}`)
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
      console.log(poke.name)
      return(<Card  key={poke.name} onClick={handleCardClick} pokemon={poke}></Card>)
    })

    if(loading) return <p>Card Collection is loading..</p>
    if(err) return <p>A network was encountered</p>
    return(
      <>
      <div className='card-collection'>
          <dialog  className='modal modal-win' id='modal-win'>
            <h1>You won</h1>
            <button onClick={()=> {
              setClickedPoke([])
              setPokemons([])
              setGameResult("Playing")
              setLoading(true)
              setScore({current:0,best:0})
              setPage("Welcome")
              }}>Restart</button>
          </dialog>
          
          <dialog  className='modal modal-lose' id='modal-lose'>
            <h1>You lost</h1>
            <button onClick={()=> {
              setClickedPoke([])
              setPokemons([])
              setGameResult("Playing")
              setLoading(true)
              setScore({current:0,best:0})
              setPage("Welcome")
              }}>Restart</button>

          </dialog>
          {pokemonJSX}
         </div>
      </>
    )
  
  }
  CardCollection.propTypes = {
    pokemons: PropTypes.object,
    setPokemons: PropTypes.func,
    score: PropTypes.object,
    setScore: PropTypes.func,
    setPage: PropTypes.func,
  }
  export default CardCollection

  
