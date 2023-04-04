import { createContext } from "react";
import { UseGetPokemon } from "../../Hooks/UseGetPokemon";

export const contextPokemon = createContext();

export const ProviderContextPokemon = ({ children }) => {

  const { pokemonsData } = UseGetPokemon()

  return (
    <contextPokemon.Provider value={{ pokemonsData }}>
      { children }
    </contextPokemon.Provider>
  );
};