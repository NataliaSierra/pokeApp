import { Typography } from "@mui/material";
import './App.css';
// import { GridPokemons } from "./Components/Layout/GridPokemons";
import { UIHeader } from "./Components/UI/UIHeader/UIHeader";
import { UICards } from "./Components/UI/UICards/UICards";

function App() {
  return (
    <>
      {/* <Typography pb={5} variant="h4">POKEMON</Typography> */}
      <UIHeader/>
      <UICards/>
      {/* <GridPokemons /> */}
    </>
  );
}
export default App;
