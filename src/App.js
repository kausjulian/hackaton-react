import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Favoritos from "./components/Favoritos";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Peliculas from "./components/Peliculas";
import PeliDetalle from "./components/PeliDetalle";
import MoviesProvider  from "./context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element={<Inicio />} />
          <Route path = '/peliculas' element={<Peliculas />} />
          <Route path = '/peliculas/:id' element={<PeliDetalle />} />
          <Route path = '/favoritos' element={<Favoritos />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
