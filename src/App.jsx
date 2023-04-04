import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import "./App.css";
import { contextPokemon } from "./Contexts/ApiPokemon/ProviderContextPokemon";

function App() {
  const { pokemonsData } = useContext(contextPokemon);

  return (
    <>
      <Typography pb={5} variant="h4">POKEMON</Typography>
      <Grid
        xs={12}
        md={10}
        xl={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {pokemonsData?.map((item, index) => (
          <Grid xs={6} md={4} xl={3} key={index}>
            <Card sx={{ width: 250, minHeight: 150 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item?.sprites.other.dream_world.front_default}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
