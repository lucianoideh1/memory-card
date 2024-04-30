import { useState, useEffect } from 'react'

const useGetPokePool = () => {
  // steps for this component or custom hook: 
  // 1. Create state for stateArr, error,loading
  const [state,setState] = useState(null)
  const [err,setErr] = useState(null)
  const [loading,setLoading] = useState(loading)
  
  // implement the useEffect and set a new state based on that, use as a ref the getpokepool function
    useEffect(() => {
        fetch(url)
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
  //return all of those at the end
  
    return { state, err, loading }
}

export default useGetPokePool