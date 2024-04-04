import { useState, useEffect } from "react"
const Main = () => {
    const [pokemons, setPokemons] = useState([])
    // const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20").then((result) => {
            return result.json()
        })
        .then((data) => {
            console.log(data)
            setPokemons(data.results)
        })
    },[])

  return (
   <main>
    {pokemons.map((pokemon) => <div key={pokemon.url}>{pokemon.name}</div>)}
   </main>
  )
}

export default Main