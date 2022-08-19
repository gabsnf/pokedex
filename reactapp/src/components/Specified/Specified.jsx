import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Specified.css";

export function Specified() {
  const params = useParams();
  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    async function getEvolve() {
      const resultado = await fetch(
        "https://pokeapi.co/api/v2/evolution-chain/" + params.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let evolutions = resultado.json();
      console.log(evolutions);
    }
    getEvolve();
  }, []);

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
              <h3>Forma</h3>
              {pokeInfoStatus[0].name}
            </div>
          );
        } else if (pokeInfoName === "stats") {
          return (
            <div className="data-box">
              <h3>Status</h3>
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
    </div>
  );
}
