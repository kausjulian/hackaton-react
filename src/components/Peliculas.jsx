import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import { Pelicula } from "./Pelicula";

const Peliculas = () => {
  const { moviesTop, setMoviesTop, onAdd } = useContext(MoviesContext);

  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d067f0079055d88b4ac22d6679c7443c&language=es-US&"
    );
    setMoviesTop(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="container p-5">
      <div className="container row">
        {moviesTop.map((movie) => (
          <Pelicula key={movie.id} movie={movie} {...movie}>
            <i onClick={() => onAdd(movie)} className="bi bi-heart-fill"></i>
          </Pelicula>
        ))}
      </div>
    </main>
  );
};

export default Peliculas;
