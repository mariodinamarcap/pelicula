import { Link } from "react-router"

export const TarjetaPelicula = ({ pelicula }) => {
  return (
    <Link to={`/pelicula/${pelicula.imdbID}`}>
      <article>
        {pelicula.Poster === "N/A" ? (
          <div>🎬 Sin póster</div>
        ) : (
          <img src={pelicula.Poster} alt={pelicula.Title} />
        )}
        <h2>{pelicula.Title}</h2>
        <p>Año: {pelicula.Year}</p>
      </article>
    </Link>
  )
}
