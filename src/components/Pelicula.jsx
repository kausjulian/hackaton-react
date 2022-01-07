import "bootstrap-icons/font/bootstrap-icons.css";

export const Pelicula = ({ title, poster_path, vote_average, children }) => {
  return (
    <div className="col-lg-3 col-md-4">
      <article className="card m-2 movie-card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{vote_average}/10</p>
          {children}
        </div>
      </article>
    </div>
  );
};
