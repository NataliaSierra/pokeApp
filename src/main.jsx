import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderContextPokemon } from "./Contexts/ApiPokemon/ProviderContextPokemon";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderContextPokemon className="App">
    <App />
  </ProviderContextPokemon>
);
