import React, { useState, useEffect } from "react";

function Pokemon({ name, avatar }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((data) => {
              let pokemon = {
                id: data.id,
                name: data.name,
                avatar: data.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);

  return (
    <>
      <h3>Ajax Apis - Peticiones Asincronas con Hooks</h3>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
