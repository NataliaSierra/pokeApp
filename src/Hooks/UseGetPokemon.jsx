import React, { useEffect, useState } from "react";

export const UseGetPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsData, setPokemonsData] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const getAllPokemon = async () => {
    const fetchPokemon = await fetch(BASE_URL);
    const data = await fetchPokemon.json();
    setPokemons(data.results);

    const promise = data.results.map(async (item) => {
      const fetchPokemonOneData = await fetch(item.url);
      const data = await fetchPokemonOneData.json();
      return data
    });

    const result = await Promise.all(promise)
    // console.log('🚀  --->  file: UseGetPokemon.jsx:21  --->  getAllPokemon  --->  result:', result)

    setPokemonsData(result)
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return { pokemons, pokemonsData };
};
