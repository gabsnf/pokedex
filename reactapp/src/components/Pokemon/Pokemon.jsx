import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Specified } from "../Specified/Specified";
import "./styles.css";

export function Pokemon({ name, url }) {
  let id = url.split("/")[6];

  async function info() {
    const resultado = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let infos = await resultado.json();
    // setCard(infos);
    console.log(infos);
  }

  return (
    <Link to={`/pokemon/${id}`}>
      <div
        id="moldura"
        onClick={() => {
          if (name) {
            info();
          }
        }}
      >
        <h2>{name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id + ".png"
          }`}
        ></img>
      </div>
    </Link>
  );
}
