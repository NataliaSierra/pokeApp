import React from 'react';
import './UICards.css';
import { useContext } from "react";
import { contextPokemon } from "../../../Contexts/ApiPokemon/ProviderContextPokemon";

export const UICards = () => {
  const { pokemonsData } = useContext(contextPokemon);
  return (
    <>
    <div className='container-section-cards'>
      <div className='section-cards'>
        {pokemonsData?.map((item, index) => (
        <div className="card" key={index}>
          <div className="profile-pic">
            <img src={item?.sprites.other.dream_world.front_default} alt={item.name} />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name"> {item.name}</span>
              <span className="about-me">Info about {item.name} </span>
            </div>
            <div className="bottom-bottom">
              <button className="button">Read more</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </>    
);
}
