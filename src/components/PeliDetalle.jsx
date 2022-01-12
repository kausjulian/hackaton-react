import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";



const PeliDetalle = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const {id} = useParams()
  
  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d067f0079055d88b4ac22d6679c7443c&language=es-ES`
    );
    setMovieDetail(res.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  
  return (
    <div className="container mt-3 row">
      <div className="col-9">
      <h2>{movieDetail.title}</h2>
      <h3 className="text-secondary mt-2">{movieDetail.tagline}</h3>
      <p className="mt-5">{movieDetail.overview}</p>
      <h4 className="mt-3">Lanzamiento</h4>
      <span className="">{movieDetail.release_date}</span>
      <h4 className="mt-3">Puntuación </h4>
      <span className="">{movieDetail.vote_average} / 10</span>
      </div>
      
      <div className="col-3 mt-3">
      <img src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}/>
      </div>
    </div>
  );
};

export default PeliDetalle;
