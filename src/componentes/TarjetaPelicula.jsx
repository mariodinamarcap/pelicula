export const TarjetaPelicula = ({ pelicula }) => {
  return (
    <article>
      {pelicula.Poster === "N/A" ? (
        <div>🎬 Sin póster</div>
      ) : (
        <img src={pelicula.Poster} alt={pelicula.Title} />
      )}
      <h2>{pelicula.Title}</h2>
      <p>Año: {pelicula.Year}</p>
    </article>
  )
}
