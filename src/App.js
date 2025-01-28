import './App.css';
import { Routes, Route } from 'react-router';
import { createContext, useState } from 'react';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import BlogCharacter from './components/BlogCharacter';
export const CharactersContext = createContext();

function App() {

  // Declaramos una variable de estado para que esta pueda cambiar desde los hijos
  // Le pasamos un único objeto con la bariable de estado y la función para modificarlo
  const [charactersList, setCharactersList] = useState(null);

  console.log(charactersList);

  return (
    <div className="App">

      <CharactersContext.Provider value={{ charactersList, setCharactersList }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogCharacter />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CharactersContext.Provider>

    </div>
  );
}

export default App;
