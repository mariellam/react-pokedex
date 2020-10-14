import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1 id="title">Maku's Pokedex</h1>
        <div className="search">
          <input id="searchbox" type="text" placeholder="Search Pokemon" />
        </div>
      </div>
    </header>
  );
}

export default Header;