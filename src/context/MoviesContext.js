import React, {useState, createContext, useEffect} from "react";

export const MoviesContext = createContext(null)

const MoviesProvider = ({children}) => {
    const [moviesTop, setMoviesTop] = useState([]);
    const [favoritos, setFavoritos] = useState( JSON.parse(localStorage.getItem('favoritos')) ?? []);

    useEffect(() => {
      localStorage.setItem('favoritos', JSON.stringify(favoritos))
    },[favoritos])

    //Agregar a favoritos
    const onAdd = movie => {
      const existe = favoritos.find( favorito => favorito.id === movie.id);
      if(existe) return;
      setFavoritos([movie, ...favoritos])
    }
   
    return(
        <MoviesContext.Provider value={{moviesTop, setMoviesTop, onAdd, favoritos }}>
                {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider