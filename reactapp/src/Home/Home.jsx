import { useEffect } from "react";
import { useState } from "react";
import { Pokemon } from "../components/Pokemon/Pokemon";
import "./Home.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca] = useState("");

  async function getPokemon() {
    const resultado = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let allPokemon = await resultado.json();
    setPokemons(allPokemon.results);
  }
  // useEffect(() => {
  //   console.log(pokemons);
  // }, [pokemons]);
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      <div
        id="principal"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {pokemons.map((item, index) => (
          <Pokemon key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
