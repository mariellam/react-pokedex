import React from 'react';

function Pokemon(props) {
  return (
    <li>
      <a href={props.pokemonUrl} alt={props.pokemonName}>
        <div>
          <h2>{props.pokemonName}</h2>
          <span>{props.pokemonId}</span>
        </div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`}/>
      </a>
    </li>
  );
}

export default Pokemon;