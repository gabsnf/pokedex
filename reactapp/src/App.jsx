import { useEffect } from 'react'
import { useState } from 'react'
import { Pokemon } from './components/Pokemon/index.jsx'  
import { Nome } from './components/Slide/index.jsx'


function App() {

  const [pokemons, setPokemons] = useState([])

  async function getPokemon(){
    const resultado = await fetch(
      "https://pokeapi.co/api/v2/pokemon",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    )


      let allPokemon = await resultado.json()
      console.log(allPokemon) 
      console.log(allPokemon.results[0].name)
      setPokemons(allPokemon)
      return(
        <div>
      {
      pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id} info={pokemon} setPokemons={setPokemons} pokemons={pokemons} />
      })
    }
      </div>
      )

  }
  getPokemon()


  return (
    <div>
      <Nome />
    </div>
  )
}

export default App
