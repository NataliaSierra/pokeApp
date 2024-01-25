import React from 'react';
import './UIHeader.css';
import PokemonLogo from "../../../Assets/ImgPokeapp/PokemonHeader/PokemonLogo.png";
import { UICards } from '../UICards/UICards';

export const UIHeader = () => {
  return (
    <>
    <header>
        <div className='pokeapp-header'>
          <nav className='pokeapp-menu-nav'>
            <div className='header-pokeapp-logo'>
              <img src={PokemonLogo} alt="Pokemon" className='pokeapp-logo'/>
            </div>
            <ul className='pokeapp-menu-ul'>
              <li>
                <a className='a-pokeapp-menu' href="">Home</a>
              </li>
              <li>
                <a className='a-pokeapp-menu' href="">Series</a>
              </li>
              <li>
                <a className='a-pokeapp-menu' href="">Movies</a>
              </li>
              <li>
                <a className='a-pokeapp-menu' href="">Characters</a>
              </li>
              <li>
                <a className='a-pokeapp-menu' href="">Pokémon</a>
              </li>
            </ul>
            <div className='search-bar'>
              <div className='pokeapp-search-bar'>
                <svg className="icon-search-bar" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" className="input-search-bar"/>
              </div>
            </div>
          </nav>
        </div>
    </header>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#c8f5d9ab" fill-opacity="1" d="M0,320L30,288C60,256,120,192,180,176C240,160,300,192,360,208C420,224,480,224,540,197.3C600,171,660,117,720,90.7C780,64,840,64,900,85.3C960,107,1020,149,1080,186.7C1140,224,1200,256,1260,266.7C1320,277,1380,267,1410,261.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
    </svg>
    {/* <UICards/> */}
    </>
  )
}
