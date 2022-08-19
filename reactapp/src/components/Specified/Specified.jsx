import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Specified.css";

export function Specified() {
  const params = useParams();
  const [status, setStatus] = useState([]);

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
      console.log(infos);
      setStatus(Object.keys(infos));
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
      {status.map((status, index) => {
        return (
          <div key={index}>
            <p>{status}</p>
          </div>
        );
      })}
    </div>
  );
}
