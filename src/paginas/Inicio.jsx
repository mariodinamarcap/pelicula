import { Buscador } from "../componentes/Buscador"
import { ListaPeliculas } from "../componentes/ListaPeliculas"

export const Inicio = ({ peliculaEscrita, setPeliculaEscrita, buscarPeliculas, estaEsperando, mensajeError, peliculas }) => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500">🎬 Mi cine</h1>

      <Buscador
        peliculaEscrita={peliculaEscrita}
        setPeliculaEscrita={setPeliculaEscrita}
        buscarPeliculas={buscarPeliculas}
      />

      {estaEsperando ? (
        <p>Buscando...</p>
      ) : mensajeError ? (
        <p>{mensajeError}</p>
      ) : (
        <ListaPeliculas peliculas={peliculas} />
      )}
    </main>
  )
}
