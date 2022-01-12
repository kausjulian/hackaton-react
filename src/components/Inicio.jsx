import React, { useContext, useEffect } from "react";
import axios from "axios";
import Carrousel from "./Carrousel";
import { Pelicula } from "./Pelicula";
import { MoviesContext } from "../context/MoviesContext";

const Inicio = () => {
  const { moviesTop, setMoviesTop, onAdd } = useContext(MoviesContext);
  
  const getNewMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d067f0079055d88b4ac22d6679c7443c&language=en-US&page=1"
    );
    setMoviesTop(res.data.results);
  };

  useEffect(() => {
    getNewMovies();
  }, []);
  
  return (
      <main className="container">
        <Carrousel/>
      <div className="container">
      <div className="row">
        <h1 className="text-center mt-3 p-3">Lanzamientos</h1>
        {moviesTop.map((movie) => (
          <Pelicula key={movie.id} movie={movie} {...movie}>
            <i onClick={() => onAdd(movie)} className="bi bi-heart-fill"></i>
          </Pelicula>
        ))}
      </div>
    </div>
      </main>

  );
};

export default Inicio;
