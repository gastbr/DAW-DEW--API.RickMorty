import './App.css';
import { Routes, Route } from 'react-router';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layout';
import BlogCharacter from './components/BlogCharacter';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogCharacter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
