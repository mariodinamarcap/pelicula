import { TarjetaPelicula } from "./TarjetaPelicula"

export const ListaPeliculas = ({ peliculas }) => {
  return (
    <section>
      {peliculas.map(pelicula => <TarjetaPelicula key={pelicula.imdbID} pelicula={pelicula} />)}
    </section>
  )
}
