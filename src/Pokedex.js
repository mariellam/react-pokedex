import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon'

function Pokedex() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([]);
  

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(res => res.json())
    .then(data => {
      setPokemons(data.results);
      setIsLoading(false);
    })
  }, [isLoading]);

  const pokemonList = pokemons.map((pokemon,i) => (<Pokemon key={i} pokemonId={pokemon.url.slice(34, -1)} pokemonName={pokemon.name} pokemonUrl={pokemon.url} />))

  return (
    <div className="container">
      <ul className="pokedex">
        {pokemonList}
      </ul>
    </div>
  )
}

export default Pokedex;