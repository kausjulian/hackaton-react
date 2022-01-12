import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const { favoritos } = useContext(MoviesContext);
  const [search, setSearch] =  useState("")
  const navigate = useNavigate()
  
  const buscar = (e) =>{
    e.preventDefault()
    if (search ==="" ) {return}
    navigate()
  }

  
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movies-App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/peliculas">
                  Películas
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <Link to="/favoritos" className="nav-link d-flex align-items-center">
                <i className="bi bi-heart-fill"></i>
                <span className="m-1 text-dark">{favoritos.length}</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
