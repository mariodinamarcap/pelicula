import { useState, useEffect } from "react"
import { ListaPeliculas } from "./componentes/ListaPeliculas"

function App() {

  const [peliculaEscrita, setPeliculaEscrita] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [estaEsperando, setEstaEsperando] = useState(false)
  const [mensajeError, setMensajeError] = useState(null)

  useEffect(() => {
    const buscarPeliculas = async () => {
      setEstaEsperando(true)
      setMensajeError(null)

      try {
        const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=batman`)
        const datos = await respuesta.json()

        if (!datos.Search) throw new Error("No encontramos películas")

        setPeliculas(datos.Search)
      } catch (err) {
        setMensajeError(err.message)
      } finally {
        setEstaEsperando(false)
      }
    }

    buscarPeliculas()
  }, [])

  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-500">🎬 Mi cine</h1>

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
