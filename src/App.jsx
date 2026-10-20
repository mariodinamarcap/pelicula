import { useState } from "react"
import { ListaPeliculas } from "./componentes/ListaPeliculas"
import { Buscador } from "./componentes/Buscador"

function App() {

  const [peliculaEscrita, setPeliculaEscrita] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [estaEsperando, setEstaEsperando] = useState(false)
  const [mensajeError, setMensajeError] = useState(null)

  const buscarPeliculas = async () => {
    setEstaEsperando(true)
    setMensajeError(null)

    try {
      const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${peliculaEscrita}`)
      const datos = await respuesta.json()

      if (!datos.Search) throw new Error("No encontramos películas")

      setPeliculas(datos.Search)
    } catch (err) {
      setMensajeError(err.message)
    } finally {
      setEstaEsperando(false)
    }
  }

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

export default App
