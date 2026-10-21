import { useState } from "react"
import { Inicio } from "./paginas/Inicio"

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
    <Inicio
      peliculaEscrita={peliculaEscrita}
      setPeliculaEscrita={setPeliculaEscrita}
      buscarPeliculas={buscarPeliculas}
      estaEsperando={estaEsperando}
      mensajeError={mensajeError}
      peliculas={peliculas}
    />
  )
}

export default App
