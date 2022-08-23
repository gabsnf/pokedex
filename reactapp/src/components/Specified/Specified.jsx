import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Specified.css";

export function Specified() {
  const params = useParams();
  const [pokeInfo, setPokeInfo] = useState({});
  const [prevEvolves, setEvolves] = useState([]);
  const [evolId, setEvolID] = useState([]);
  const [nextEvolve, setNextEvolve] = useState([]);

  async function evolveLine() {
    const resultado = await fetch(
      "https://pokeapi.co/api/v2/evolution-chain/" + evolId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let nextEvolve = await resultado.json();
    console.log(nextEvolve.chain.evolves_to[0].evolves_to[0].species.name);
    let full = nextEvolve.chain.evolves_to[0].evolves_to[0].species.name;
    setNextEvolve(full);
  }

  useEffect(() => {
    async function getEvolve() {
      const resultado = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/" + params.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let evolutions = await resultado.json();
      let prevEvolve = evolutions.evolves_from_species.name;
      let evol = evolutions.evolution_chain.url;
      console.log(evol);
      let id = evol.split("/")[6];
      setEvolves(prevEvolve);
      setEvolID(id);
      evolveLine();
    }
    console.log(prevEvolves);
    getEvolve();
  }, [pokeInfo]);

  useEffect(() => {
    async function info() {
      const resultado = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + params.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let infos = await resultado.json();
      // console.log(JSON.stringify(infos, null, 2));
      setPokeInfo(infos);
    }
    info();
  }, []);
  return (
    <div
      id="mold"
      style={{
        width: "50%",
        height: "400px",
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          params.id + ".png"
        }`}
      ></img>
      {Object.keys(pokeInfo).map((pokeInfoName, index) => {
        if (
          !["forms", "weight", "stats", "types", "species"].includes(
            pokeInfoName
          )
        ) {
          return null;
        }
        const pokeInfoStatus = pokeInfo[pokeInfoName];
        if (pokeInfoName == "forms") {
          return (
            <div className="data-box">
              <h3>Forma:</h3>
              {pokeInfoStatus[0].name}
              <h4>Previous form:</h4>
              {prevEvolves}
              <h4>Next form:</h4>
              {nextEvolve}
            </div>
          );
        } else if (pokeInfoName === "stats") {
          return (
            <div className="data-box">
              <h3>Status:</h3>
              {pokeInfoStatus.map((stats) => (
                <>
                  <div className="row">
                    <b>{stats.stat.name}: </b>
                    {stats.base_stat}
                  </div>
                </>
              ))}
            </div>
          );
        } else {
          return (
            <div className="data-box">
              <h3>{pokeInfoName}: </h3>
              {pokeInfoName == "types" &&
                pokeInfoStatus[pokeInfoStatus.length - 1].type.name}
              {pokeInfoName === "species" && pokeInfoStatus.name}
              {pokeInfoName === "weight" && pokeInfoStatus}
            </div>
          );
        }
      })}

      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
}
