import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Specified } from "../Specified/Specified";
import "./styles.css";

export function Pokemon({ name }, index) {
  async function info() {
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let infos = await resultado.json();
    console.log(infos);
  }

  async function imgs() {
    const resultado = await fetch(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        name,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let fotos = resultado.json();
    console.log(fotos);
  }

  useEffect(() => {
    info();
  }, []);

  return (
    <div
      id="moldura"
      onClick={() => {
        if (name) {
          info();
          console.log(info);
          <Link to={`/pokemon/${name}`}>Name</Link>;
        }
      }}
    >
      {name}
    </div>
  );
}
