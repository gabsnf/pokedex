import { useEffect } from "react";
import { useState } from "react";
import {Pokemon} from "./components/Pokemon";

import { Nome } from "./components/Slide/index.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);

  async function getPokemon() {
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let allPokemon = await resultado.json();
    setPokemons(allPokemon.results);
  }

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap"}}>

      {pokemons &&
        pokemons.map((item, index) => (

          <Pokemon key={index} name={item.name} /> 

        ))}

    </div>
  );
}

export default App;
