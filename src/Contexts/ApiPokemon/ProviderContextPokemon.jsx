import { createContext } from "react";
import { UseGetPokemon } from "../../Hooks/UseGetPokemon";

export const contextPokemon = createContext();

export const ProviderContextPokemon = ({ children }) => {

  const { pokemonsData } = UseGetPokemon()
  // console.log('🚀  --->  file: ProviderContextPokemon.jsX:13  --->  ProviderContextPokemon  --->  pokemonsData:', pokemonsData)

  return (
    <contextPokemon.Provider value={{ pokemonsData }}>
      { children }
    </contextPokemon.Provider>
  );
};