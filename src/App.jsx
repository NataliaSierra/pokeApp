import { Typography } from "@mui/material";
import "./App.css";
import { GridPokemons } from "./Components/Layout/GridPokemons";

function App() {
  return (
    <>
      <Typography pb={5} variant="h4">POKEMON</Typography>
      <GridPokemons />
    </>
  );
}
export default App;
