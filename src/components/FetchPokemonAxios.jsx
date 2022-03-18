import React, {useState} from 'react'
import axios from 'axios' 

// create fetch w/ axios function
// iterate .map in html 

const FetchPokemonAxios = () => {
    const [pokemon, setPokemon] = useState([]); 

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=200`)
        .then(response=>{
            console.log(response.data.results)
            setPokemon([...response.data.results])
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Fetch Pokemon Axios</h1>
            <button onClick={fetchPokemonAxios}>Fetch Pokemon</button>
            {
                pokemon?
                <div>
                    {
                        pokemon.map((pkm, i) => {
                            return (
                                <h3 key={i}>{pkm.name}</h3>
                            )
                        })
                    }
                </div>:
                <h3></h3>
            }
        </div>
    )
}

export default FetchPokemonAxios