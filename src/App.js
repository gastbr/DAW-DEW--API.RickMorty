import React, { useState, useEffect } from 'react';
import Characters from './components/Characters';
import { useFetch } from './hooks/useFetch';
import imagenRickMorty from './img/rick-morty.png';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);

  //hook personalizado usefetch useCallback
  // sustituir utilizando el hook

  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

  const reqApi = async () => {
    setCharacters(data);
  };

  useEffect(() => {
    setCharacters(data);
  }, [data]);

  // const handleCharacter = () => {
  //   setCharacters(data);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {loading &&
          <>
            <h1 className="App-title">Rick & Morty</h1>
            <img src={imagenRickMorty} className="App-logo" alt="logo" />
            <button onClick={reqApi} className="btn-search">Reload</button>
          </>}
        {characters && (
          <Characters characters={characters} ></Characters>
        )}
        {error && <h1>{error}</h1>}

        {/* <button onClick={handleCharacter}> Character</button> */}
      </header>
    </div>
  );
}

export default App;
