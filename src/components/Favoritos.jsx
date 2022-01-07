import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Pelicula } from "./Pelicula";

const Favoritos = () => {
  const { favoritos } = useContext(MoviesContext);

  return (
    <main className="container p-5">
      <div className="container row">
        {favoritos.map((movie) => (
          <Pelicula key={movie.id} movie={movie} {...movie}>
            <i class="bi bi-trash-fill"></i>
          </Pelicula>
        ))}
      </div>
    </main>
  );
};

export default Favoritos;
