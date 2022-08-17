import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Specified } from "../Specified/Specified";
import "./styles.css";

export function Pokemon({ name, url }) {
  const [id, setId] = useState();
  const [card, setCard] = useState();

  function imagens() {
    let array = url.split("/");
    let id = array[6];
    setId(id);
  }

  async function info() {
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let infos = await resultado.json();
    setCard(infos);
    console.log(infos);
  }

  useEffect(() => {
    imagens();
  }, []);

  // console.log(id);

  return (
    <Link to={`/pokemon/${name}`}>
      <div
        id="moldura"
        onClick={() => {
          if (name) {
            info();
          }
        }}
      >
        {name}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id + ".png"
          }`}
        ></img>
      </div>
      {card &&
        card.map((item, index) => (
          <Specified key={index} height={item.height} />
        ))}
    </Link>
  );
}
