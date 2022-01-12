import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import { Pelicula } from "./Pelicula";

const Favoritos = () => {
  const { favoritos,deleteFav } = useContext(MoviesContext);

  return (
    
   <main className="container p-5">
      <div className="container row">
        {favoritos.length===0?<h2 className="text-center mt-5">No hay peliculas, <Link to="/peliculas" className="text-primary link-favoritos">agregue sus favoritas!</Link></h2>:
        favoritos.map((movie) => (
          <Pelicula key={movie.id} movie={movie} {...movie}>
            <i className="bi bi-trash-fill" onClick={()=>deleteFav(movie.id)}></i>
          </Pelicula>
          ))}
      </div>
    </main>

  );
};

export default Favoritos;
