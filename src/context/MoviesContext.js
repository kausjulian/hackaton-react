import React, {useState, createContext, useEffect} from "react";
import Swal from 'sweetalert2'

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
      if(existe) return Swal.fire({icon:"error",text:"Ya está en favoritos!"})
      setFavoritos([movie, ...favoritos])
      Swal.fire('Agregada a tus favoritos!')
    }
   //funcion para eliminar favoritos

   const deleteFav = (id) =>{
     setFavoritos(favoritos.filter(favorito=>id !=favorito.id))
   }

    return(
        <MoviesContext.Provider value={{moviesTop, setMoviesTop, onAdd, favoritos,deleteFav }}>
                {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider