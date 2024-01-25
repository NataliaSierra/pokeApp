import React, { useEffect, useState } from "react";

export const UseGetPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsData, setPokemonsData] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  // Traer todos los pokemon
  const getAllPokemon = async () => {
    const fetchPokemon = await fetch(BASE_URL);
    const data = await fetchPokemon.json();
    setPokemons(data.results);
    console.log("Pokemon y URL", data.results);

    const promise = data.results.map(async (item) => {
      const fetchPokemonOneData = await fetch(item.url);
      const data = await fetchPokemonOneData.json();
      console.log("Información de cada Pokemon", data);
      return data
    });

    const result = await Promise.all(promise)
    setPokemonsData(result)
    console.log("Información de cada Pokemon en un solo Array de objetos", result);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return { pokemons, pokemonsData };
};
