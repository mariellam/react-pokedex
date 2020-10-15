import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon'

function Pokedex() {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    .then(res => res.json())
    .then(data => {
      setPokemons(data.results);
      setIsLoading(false);
    })
  }, [isLoading]);

  const pokemonList = pokemons
                        .filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
                        .map((pokemon,i) => (<Pokemon key={i} pokemonId={pokemon.url.slice(34, -1)} pokemonName={pokemon.name} pokemonUrl={pokemon.url} />))

  return (
    <div className="main">
      <header className="container">
        <div className="nav-container">
          <h1 className="title">Maku's Pokedex</h1>
          <div className="search">
            <input className="searchbox" name="search" type="text" placeholder="Search Pokemon" onChange={handleChange} />
          </div>
        </div>
      </header>
      <div className="container">
        {isLoading && <p>Loading Pokemon Information</p>}
        <ul className="pokedex">
          {pokemonList}
        </ul>
      </div>
    </div>
  )
}

export default Pokedex;