import { useState, useEffect } from "react"

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
        console.log(err.message)
        setMensajeError(err.message)
      } finally {
        setEstaEsperando(false)
      }
    }

    buscarPeliculas()
  }, [])

  return (
    <h1 className="text-3xl font-bold text-blue-500">🎬 Mi cine</h1>
  )
}

export default App
